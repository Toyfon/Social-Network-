import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profilePage-reducer";
import userPhoto from './../../../assets/images/user.png'

import React from "react";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status:string) => void
}


const ProfileInfo = ({profile,status,updateStatus}: ProfileInfoPropsType) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
           {/* <div className={s.profile}>
                <img
                    src='https://source.unsplash.com/1600x900/?nature,water' alt='water'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large !== null ? profile.photos.large : userPhoto} alt='UserPhoto'/>
                <div> {profile.contacts.github}</div>
                <div> {profile.contacts.instagram}</div>
                <div> {profile.fullName}</div>
                <div> {profile.lookingForAJobDescription}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo