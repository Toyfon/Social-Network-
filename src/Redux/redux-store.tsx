import {combineReducers, createStore, Store} from "redux";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profilePage-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMassageBodyCreator} from "./dialogsPage-reducer";
import friendsBarReducer from "./friendsBar-reducer";



export type AppStateType = ReturnType <typeof appState>
export type AllACType =
    ReturnType <typeof addPostAC> |
    ReturnType <typeof updateNewPostTextAC> |
    ReturnType <typeof updateNewMassageBodyCreator> |
    ReturnType <typeof sendMessageCreator>



let appState = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friendsBar:friendsBarReducer
});

let store:Store<AppStateType, AllACType > = createStore(appState);

export default store