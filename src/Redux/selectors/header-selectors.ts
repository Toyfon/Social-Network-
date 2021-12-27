import {RootReducerType} from "../redux-store";

export const  getAuthSelector = (state:RootReducerType):boolean => state.auth.isAuth
export const  getLoginSelector = (state:RootReducerType):string | null => state.auth.login
export const  getFetchingSelector = (state:RootReducerType):boolean => state.auth.isFetching