import axios, {AxiosResponse} from "axios";
import {UserType} from "../Redux/users-reducer";
import {ProfileType} from "../Redux/profilePage-reducer";
import {AuthMeResponseType} from "../components/Header/Header-container";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4c618d05-4087-4c56-9fa2-e412fa4c037d"
    }
})


export type Result<T> = {
    resultCode: 0 | 1
    data: T
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<UserType>(`users?page=${currentPage}&count=${pageSize}`,) // get запрос (типизируем только AxiosResponse)
            .then(response => response.data)
    }
}
export const followAPI = {
    follow(userId: number) {
        return instance.post<UserType,AxiosResponse<UserType>>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<UserType>(`follow/${userId}`) // delete запрос (типизируем только AxiosResponse)
            .then(response => response.data)
    }
}
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/` + userId);
    }
}
export const authAPI = {
    me() {
        return instance.get<AuthMeResponseType>(`auth/me`)
    }
}