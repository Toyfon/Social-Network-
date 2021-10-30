import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import friendsBarReducer from "./friendsBar-reducer";
import usersReducer from "./users-reducer";





export type AppStateType = ReturnType <typeof appState>


let appState = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friendsBar:friendsBarReducer,
    usersPage:usersReducer
});

let store:Store<AppStateType,any> = createStore(appState);

export default store