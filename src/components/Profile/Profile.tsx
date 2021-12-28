import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import React, {FC} from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profilePage-reducer";


type ProfilePropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner:boolean
    savePhoto: (photo: File | null) => void
}

const Profile:FC<ProfilePropsType> = ({profile,status,updateStatus,isOwner,savePhoto,...props}) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}


export default Profile