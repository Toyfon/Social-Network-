import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)
));



export default store