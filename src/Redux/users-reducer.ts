const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


export type UserType = any


export type InitialUsersPageStateType = {
    users:UserType[]
    pageSize:number
    totalUsersCount: number
    currentPage:number
    isFetching: boolean
}



export let initialState:InitialUsersPageStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action: ActionsType): InitialUsersPageStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:state.users.map( u => {
                    if (u.id === action.userId) {
                     return {...u, followed:true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed:false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state,currentPage:action.currentPage}
        }
        case SET_TOTAL_USER_COUNT: {
            return {...state,totalUsersCount:action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state,isFetching:action.isFetching}
        }

        default:
            return state
    }
};

export type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> |
            ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC> |
            ReturnType<typeof toggleIsFetchingAC>


export const followAC = (userId:number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId:number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users:[]) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalCount:number) => ({type: SET_TOTAL_USER_COUNT, count:totalCount} as const)
export const toggleIsFetchingAC = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)




export default usersReducer;


