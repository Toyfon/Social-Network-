import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {getUserProfile, ProfileType} from "../../Redux/profilePage-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    profile: null | ProfileType

}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type PathParamsType = {
    userId: string
}
type OwnPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<OwnPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {


        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootReducerType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
})


export default compose<React.ComponentType> (
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
   // withAuthRedirect
)(ProfileContainer)