import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profilePage-reducer";


type ProfilePropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {

    return (

        <div className={s.profile}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>

        </div>
    )
}


export default Profile