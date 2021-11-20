import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType ={
profile: any
}

const Profile  = (props:ProfilePropsType) => {

    return (

        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />

        </div>
    )
}


export default Profile