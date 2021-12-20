import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: boolean
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
    }
    photos: {
        small: string
        large: string
    }
}


export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type InitialProfilePageStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: null | ProfileType
    status: string
}


let initialState: InitialProfilePageStateType = {
    posts: [],
    newPostText: ' ',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action: ActionsType): InitialProfilePageStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = ' ';
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
};


export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>


export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const setUserProfile = (profile: null | ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

//ThunkCreator
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        debugger
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status: string ) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if ( response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export default profileReducer;


