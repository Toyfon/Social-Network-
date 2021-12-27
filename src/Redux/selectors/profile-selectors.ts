import {RootReducerType} from "../redux-store";
import {ProfileType} from "../profilePage-reducer";

export const  getProfileSelector = (state:RootReducerType):ProfileType | null => state.profilePage.profile
export const  getStatusSelector = (state:RootReducerType):string => state.profilePage.status
export const  getIdSelector = (state:RootReducerType):number | null => state.auth.id
export const  getAuthSelector = (state:RootReducerType):boolean => state.auth.isAuth