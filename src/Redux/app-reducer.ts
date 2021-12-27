import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootReducerType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


export type InitialStateType = {
    initialized: boolean
}


let initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case "SET_INITIALIZED":
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
};


export type ActionType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({type: "SET_INITIALIZED",} as const)


export type ThunkType = ThunkAction<void, // Return type of the thunk function
    RootReducerType, // state type used by getState
    unknown, // any "extra argument" injected into the thunk
    ActionType // known types of actions that can be dispatched
    >


//ThunkCreator
export const initializeApp = (): ThunkType =>  (dispatch: Dispatch) => {
    //@ts-ignore
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}


export default appReducer;


