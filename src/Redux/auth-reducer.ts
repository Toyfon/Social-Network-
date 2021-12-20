import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
}


let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state
    }
};


export type ActionsType = ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof toggleIsFetching>


export const setAuthUserDataAC = (id: number, email: string, login: string) => ({
    type: "SET_USER_DATA",
    data: {id, email, login}
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)

//ThunkCreator
export const getAuthUserData = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(toggleIsFetching(true))
        authAPI.me().then((response) => {
            dispatch(toggleIsFetching(false))
                if (response.data.resultCode === 0) {
                     let {id, email, login} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login))
        }
    })
}

export default authReducer;


