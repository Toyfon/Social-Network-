import React, {FC} from "react";
import {FilterType, UserType} from "../../Redux/users-reducer";
import s from './users.module.css'
import {User} from "./User";
import {UsersSearchForm} from "./UsersSearchForm";


type UsersType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    onFilterChanged:(filter: FilterType)=> void
}

const Users: FC<UsersType> = ({
                   users, follow, unfollow,
                   totalUsersCount,
                   pageSize, currentPage,
                   onPageChanged, followingInProgress, onFilterChanged, ...props
               }) => {


    let pagesCount = Math.ceil(totalUsersCount / pageSize);//Math.ceil округляет до целого числа в большую сторону

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <div className={s.pagesNumber}>
            {pages.map(p => {
                return <span key={p} className={currentPage === p ? s.selectedStyle : ""}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            users.map(u => <User user={u}
                                 followingInProgress={followingInProgress}
                                 key={u.id}
                                 follow={follow}
                                 unfollow={unfollow}
                />
            )
        }
    </div>
}


export default Users