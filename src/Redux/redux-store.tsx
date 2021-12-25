import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import friendsBarReducer from "./friendsBar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import  thunk from 'redux-thunk'
import appReducer from "./app-reducer";





export type RootReducerType = ReturnType <typeof rootReducer>


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friendsBar:friendsBarReducer,
    usersPage:usersReducer,
    auth: authReducer,
    app: appReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStoreType = typeof store

export default store