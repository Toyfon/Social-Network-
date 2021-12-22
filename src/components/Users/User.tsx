import {UserType} from "../../Redux/users-reducer";
import React from "react";
import s from './users.module.css'
import { NavLink } from "react-router-dom";
import userPhoto from './../../assets/images/user.png'

type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow:(userId: number) => void
}

export const User:React.FC<UserPropsType> = ({user,followingInProgress,follow,unfollow, ...props}) => {
    return <div key={user.id}>
        <span>
                <div className={s.avatar}>
                    <NavLink to={'/profile/' + user.id}>
                          <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}
                </div>
            </span>
        <span>
                    <span>
                        <div>{user.name}</div><div>{user.status}</div>
                    </span>
                    <span>
                    <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
    </div>
}