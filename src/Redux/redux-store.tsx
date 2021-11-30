import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import friendsBarReducer from "./friendsBar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";





export type AppStateType = ReturnType <typeof appState>


let appState = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friendsBar:friendsBarReducer,
    usersPage:usersReducer,
    auth: authReducer
});

let store:Store<AppStateType,any> = createStore(appState);

export default store