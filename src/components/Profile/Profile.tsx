import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import React, {FC} from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profilePage-reducer";


type ProfilePropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile:FC<ProfilePropsType> = ({profile,status,updateStatus,...props}) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}


export default Profile