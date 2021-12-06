import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfile} from "../../Redux/profilePage-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


type mapStateToPropsType = {
    profile:null | ProfileType
}
type mapDispatchToPropsType = {
    setUserProfile:(profile:ProfileType)=>void
}
type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type PathParamsType = {
    userId: string
}
type OwnPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType




class ProfileContainer extends React.Component<OwnPropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
            profileAPI.getProfile(userId).then(data => {
                debugger
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <Profile {...this.props}  profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state:AppStateType): mapStateToPropsType => ({
profile: state.profilePage.profile
})



let UrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile})(UrlData)