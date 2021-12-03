import React from "react";
import {UserType} from "../../Redux/users-reducer";
import s from './users.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Users = ({users, follow, unfollow, totalUsersCount, pageSize, currentPage, onPageChanged}: UsersType) => {


    let pagesCount = Math.ceil(totalUsersCount / pageSize);//Math.ceil округляет до целого числа в большую сторону

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div className={s.pagesNumber}>
            {pages.map(p => {
                return <span className={currentPage === p ? s.selectedStyle : ""}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {users.map(u => <div key={u.id}>
            <span>
                <div className={s.avatar}>
                    <NavLink to={'/profile/' + u.id}>
                          <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button onClick={() =>
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "4c618d05-4087-4c56-9fa2-e412fa4c037d"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        unfollow(u.id)
                                    }
                                })
                        }>Unfollow</button>
                        : <button onClick={() =>
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "4c618d05-4087-4c56-9fa2-e412fa4c037d"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        follow(u.id)
                                    }
                                })
                        }>Follow</button>}
                </div>
            </span>
            <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                    <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
        </div>)
        }
    </div>
}


export default Users