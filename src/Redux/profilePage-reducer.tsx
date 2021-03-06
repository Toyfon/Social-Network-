import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = "social_network/profile/ADD-POST";
const SET_USER_PROFILE = 'social_network/profile/SET_USER_PROFILE'
const SET_STATUS = 'social_network/profile/SET_STATUS'
const SAVE_PHOTO = 'social_network/profile/SAVE_PHOTO'

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
    profile: null | ProfileType
    status: string
}


export let initialState: InitialProfilePageStateType = {
    posts: [],
    profile: null ,
    status: ""
};

const profileReducer = (state = initialState, action: ActionsType): InitialProfilePageStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO: {
            // @ts-ignore
            return {...state, profile:{...state.profile, photos: action.photos}}
        }
        default:
            return state
    }
};


export type ActionsType =
    ReturnType<typeof addPostAC> | ReturnType<typeof setUserProfile> | ReturnType<typeof setStatus> |
    ReturnType<typeof savePhotoSuccess>

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: null | ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const savePhotoSuccess = (photos: any) => ({type: SAVE_PHOTO, photos} as const)

//ThunkCreator

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;


