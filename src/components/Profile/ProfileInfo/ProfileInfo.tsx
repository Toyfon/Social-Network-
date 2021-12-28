import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profilePage-reducer";
import userPhoto from './../../../assets/images/user.png'

import React, {ChangeEvent} from "react";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto:(photo: File | null)=> void
}

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoPropsType) => {

    if (!profile) {
        return <Preloader/>
    }

    const onmMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) {
            savePhoto(e.target.files![0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large !== null ? profile.photos.large : userPhoto} alt='UserPhoto'/>
                {isOwner && <input type={'file'} onChange={onmMainPhotoSelected}/>}
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