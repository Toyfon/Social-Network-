import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setUserProfile} from "../../Redux/profilePage-reducer";


type ProfileType = {
    profile: null
    setUserProfile:(profile:any)=>void
}

class ProfileContainer extends React.Component<ProfileType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`) //Ajax запрос на сервер (side-effect)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}  profile={this.props.profile} />
        )
    }
}




let mapStateToProps = (state:AppStateType) => ({
profile: state.profilePage.profile
})

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer)