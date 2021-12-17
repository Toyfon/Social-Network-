import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {getUserProfile, ProfileType} from "../../Redux/profilePage-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type mapStateToPropsType = {
    profile: null | ProfileType
    isAuth: boolean
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

        if (!this.props.isAuth) return <Redirect to='/login'/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state: RootReducerType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let UrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(UrlData)