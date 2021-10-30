import React from "react";
import {UserType} from "../../Redux/users-reducer";
import s from './users.module.css'
import axios from "axios";
import userPhoto from './../../assets/images/user.png'


type UsersType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
}

const Users: React.FC<UsersType> = ({users, follow, unfollow, setUsers}) => {

    if (users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            setUsers(response.data.items)
        })

    }



    return <div>
        {
            users.map(u => <div key={u.id}>
            <span>
                <div className={s.avatar}>
                <img src={u.photos.small !== null? u.photos.small : userPhoto }/>
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

export default Users