import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import friendsBarReducer from "./friendsBar-reducer";


export type AppStateType = ReturnType <typeof appState>
/*export type AllACType =
    ReturnType <typeof addPostAC> |
    ReturnType <typeof updateNewPostTextAC> |
    ReturnType <typeof updateNewMassageBodyCreator> |
    ReturnType <typeof sendMessageCreator>*/



let appState = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friendsBar:friendsBarReducer
});

let store:Store<AppStateType,any> = createStore(appState);

export default store