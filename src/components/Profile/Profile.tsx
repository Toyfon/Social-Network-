import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import React from "react";
import {AllACType} from "../../Redux/redux-store";
import {InitialStateType} from "../../Redux/profilePage-reducer";


type ProfilePropsType ={
    profilePage: InitialStateType
    dispatch: (action: AllACType ) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (

        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                    dispatch={props.dispatch}/>
        </div>
    )
}


export default Profile