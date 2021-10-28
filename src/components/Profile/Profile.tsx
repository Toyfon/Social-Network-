import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile  = () => {
debugger
    return (

        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>

        </div>
    )
}


export default Profile