import React, {FC} from "react";
import {FilterType, UserType} from "../../Redux/users-reducer";
import {User} from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {Paginator} from "../common/Paginator/Paginator";


type UsersType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    onFilterChanged: (filter: FilterType) => void
}

const Users: FC<UsersType> = ({
                                  users, follow, unfollow,
                                  totalItemsCount,
                                  pageSize, currentPage,
                                  onPageChanged, followingInProgress, onFilterChanged, ...props
                              }) => {

    let portionSize = 10

    return <div>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <div>
            <Paginator pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount}
                       portionSize={portionSize}/>
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