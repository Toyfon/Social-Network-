import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import React from "react";
import {AppStateType} from "../../Redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Store} from "redux";


type ProfilePropsType = {
    store: Store<AppStateType,any>
    /*profilePage: InitialStateType*/
   /* dispatch: (action: AllACType) => void*/
}

const Profile: React.FC<ProfilePropsType> = (props) => {
debugger
    return (

        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                /*posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}*/
            />

        </div>
    )
}


export default Profile