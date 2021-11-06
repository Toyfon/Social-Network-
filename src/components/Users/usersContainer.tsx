import {connect} from "react-redux";
import Users from "./usersC";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)