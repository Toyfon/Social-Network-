import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../Redux/profilePage-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    profile: null | ProfileType
    status:string
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId:string) => void
    updateStatus: (status: string) => void
}
type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type PathParamsType = {
    userId: string
}
type OwnPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<OwnPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '20901'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {


        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: RootReducerType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})


export default compose<React.ComponentType> (
    connect(mapStateToProps, {getUserProfile, getStatus,updateStatus}),
    withRouter,
   // withAuthRedirect
)(ProfileContainer)