import {connect} from "react-redux";
import Users from "./users";
import {RootReducerType} from "../../Redux/redux-store";
import {
    FilterType,
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    UserType
} from "../../Redux/users-reducer";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFilter, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/selectors/users-selectors";


type UsersType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    filter: FilterType
}

class UsersContainer extends React.Component<UsersType> {

    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }


    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(pageNumber, pageSize, filter)
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.getUsers(1, pageSize, filter)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   onFilterChanged={this.onFilterChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state: RootReducerType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getFilter(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers
    }),
   // withAuthRedirect
)(UsersContainer)

