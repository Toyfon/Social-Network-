import axios, {AxiosResponse} from "axios";
import {UserType} from "../Redux/users-reducer";
import {ProfileType} from "../Redux/profilePage-reducer";
import {AuthMeResponseType} from "../components/Header/Header-container";
import {statusResponseType} from "../components/Profile/ProfileInfo/ProfileStatus";



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
    getUsers(currentPage = 1, pageSize = 10, term = '', friend: null | boolean = null) {
        return instance.get<UserType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '': `&friend=${friend}`)) // get запрос (типизируем только AxiosResponse)
            .then(response => response.data)
    }
}
export const followAPI = {
    follow(userId: number) {
        return instance.post<UserType,AxiosResponse<UserType>>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`) // delete запрос (типизируем только AxiosResponse)
            .then(response => response.data)
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId);
    },
    getStatus(userId:number) {
        return instance.get<string>(`profile/status/` + userId);
    },
    updateStatus(status:string) {
        return instance.put<statusResponseType>(`profile/status`, {
            status:status
        });
    },
    savePhoto(file: File) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put(`profile/photo`,formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        } );
    }
}


export const authAPI = {
    me() {
        return instance.get<AuthMeResponseType>(`auth/me`)
    },
    login(email:string, password:string, rememberMe:boolean = false, captcha:string = '') {
        return instance.post(`auth/login`,{email,password,rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}



export const securityAPI = {
   getCaptchaUrl () {
       return instance.get(`/security/get-captcha-url`)
   }

}
