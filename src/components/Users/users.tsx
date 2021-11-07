import React from "react";
import {UserType} from "../../Redux/users-reducer";
import s from './users.module.css'
import userPhoto from './../../assets/images/user.png'


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

    {
        let pagesCount = Math.ceil(totalUsersCount / pageSize);//Math.ceil округляет до целого числа в большую сторону

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div>
            <div className={s.pagesNumber}>
                {pages.map(p => {
                    return <span className={currentPage === p ? s.selectedStyle : ""}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {users.map(u => <div key={u.id}>
            <span>
                <div className={s.avatar}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="photo"/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                            unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            follow(u.id)
                        }}>Follow</button>}
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
}

export default Users