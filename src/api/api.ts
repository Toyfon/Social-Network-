import axios from "axios";




const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4c618d05-4087-4c56-9fa2-e412fa4c037d"
    }
})


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
            .then(response => response.data)
    }
}

