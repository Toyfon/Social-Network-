import {Dispatch} from "redux";
import {followAPI, usersAPI} from "../api/api";
import {batch} from "react-redux";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
const SET_FILTER = 'SET_FILTER'


export type UserType = any


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    filter: {
        term: "",
        friend: null as null | boolean
    }
};

export  type InitialUsersPageStateType = typeof initialState
export  type FilterType = typeof initialState.filter

const usersReducer = (state = initialState, action: ActionsType): InitialUsersPageStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USER_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case SET_FILTER: {
            return {
                ...state, filter: action.payload.filter
            }
        }

        default:
            return state
    }
};

export type ActionsType =
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleFollowingProgress> |
    ReturnType<typeof setFilter>

//Action Creators (dispatching actions)
export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: []) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USER_COUNT, count: totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => (
    {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const)
export const setFilter = (filter:FilterType) => ({type: SET_FILTER, payload: {filter}} as const)


//ThunkCreator (функция, которая принимает параметры и возвращает санку)
export const requestUsers = (page: number, pageSize: number, filter:FilterType) => {
    return (dispatch: Dispatch) => {
        // should return result in one re-render, not four
        batch(() => {
            dispatch(setCurrentPage(page))
            dispatch(toggleIsFetching(true))
            dispatch(setFilter(filter))
            usersAPI.getUsers(page, pageSize, filter.term, filter.friend)
                .then((data) => {
                    dispatch(toggleIsFetching(false))
                    dispatch(setUsers(data.items))
                    dispatch(setTotalUsersCount(data.totalCount  = 400))
                })
        })
    }
}

export const unfollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    followAPI.unfollow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}


export const follow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    followAPI.follow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}


export default usersReducer;


