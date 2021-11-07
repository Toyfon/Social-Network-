import React from "react";
import {UserType} from "../../Redux/users-reducer";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import axios from "axios";


type UsersType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    totalUsersCount:number
    pageSize:number
    currentPage:number
    setCurrentPage:(pageNumber:number) => void
    setTotalUsersCount:(totalCount:number) => void
}


class Users extends React.Component<UsersType> {

        componentDidMount() { //специальный метод классовой компоненты, в который можно передавать side-effect
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`) //Ajax запрос на сервер (side-effect)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount = 200)
                })
        }

        onPageChanged = (pageNumber:number) => {
            this.props.setCurrentPage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`) //Ajax запрос на сервер (side-effect)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }



        render() {
            let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);//Math.ceil округляет до целого числа в большую сторону

            let pages = [];
            for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span  className={this.props.currentPage === p ? s.selectedStyle : ""}
                    onClick={ (e)=> { this.onPageChanged(p)} } >{p}</span>
                })}
            </div>
            {this.props.users.map(u => <div key={u.id}>
            <span>
                <div className={s.avatar}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="photo"/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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