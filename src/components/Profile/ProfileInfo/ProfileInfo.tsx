import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profilePage-reducer";
import userPhoto from './../../../assets/images/user.png'

import React from "react";

type ProfileInfoPropsType ={
    profile: null | ProfileType

}



const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile) {
       return <Preloader/>
    }
    return (
        <div>
            <div className={s.profile}>
                <img
                    src='https://source.unsplash.com/1600x900/?nature,water' alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto } alt='UserPhoto'/>
                <div> {props.profile.contacts.github}</div>
                <div> {props.profile.contacts.instagram}</div>
                <div> {props.profile.fullName}</div>
                <div> {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

export default ProfileInfo