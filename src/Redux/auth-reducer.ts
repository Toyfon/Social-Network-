import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {authAPI} from "../api/api";
import {RootReducerType} from "./redux-store";

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
    errorMessage: string
}


let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    errorMessage: ""
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        case "SHOW_DATA_MESSAGE": {
            return {...state, ...action.payload}
        }

        default:
            return state
    }
};


export type ActionsType = ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof toggleIsFetching> |
                          ReturnType<typeof showDataMessage>


export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "SET_USER_DATA",
    payload: {id, email, login, isAuth}
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", payload:{isFetching}} as const)
export const showDataMessage = (errorMessage: string ) => ({type: "SHOW_DATA_MESSAGE", payload:{errorMessage}} as const)


//ThunkCreator
export const getAuthUserData = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(toggleIsFetching(true))
     return authAPI.me().then((response) => {
        dispatch(toggleIsFetching(false))
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    })
}

export type ThunkType = ThunkAction<
    void, // Return type of the thunk function
    RootReducerType, // state type used by getState
    unknown, // any "extra argument" injected into the thunk
    ActionsType // known types of actions that can be dispatched
    >

export const login = (email: string, password: string, rememberMe: boolean):ThunkType => (dispatch) => {
    dispatch(toggleIsFetching(true))
    authAPI.login(email, password, rememberMe).then((response) => {
        dispatch(toggleIsFetching(false))
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
            dispatch(showDataMessage(message))
        }
    })
}


export const logout = ():ThunkType => (dispatch) => {
    dispatch(toggleIsFetching(true))
    authAPI.logout().then((response) => {
        dispatch(toggleIsFetching(false))
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null,null,null,false))
        }
    })
}


export default authReducer;


