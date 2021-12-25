import {RootReducerType} from "../redux-store";
import {FilterType, UserType} from "../users-reducer";


export const  getUsers = (state:RootReducerType):UserType[] => state.usersPage.users
export const  getPageSize = (state:RootReducerType):number => state.usersPage.pageSize
export const  getTotalUsersCount = (state:RootReducerType):number => state.usersPage.totalUsersCount
export const  getCurrentPage = (state:RootReducerType):number => state.usersPage.currentPage
export const  getIsFetching = (state:RootReducerType):boolean => state.usersPage.isFetching
export const  getFollowingInProgress = (state:RootReducerType):number[] => state.usersPage.followingInProgress
export const  getFilter = (state:RootReducerType):FilterType => state.usersPage.filter
