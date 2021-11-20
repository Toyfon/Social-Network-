import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType ={
    profile:any
}



const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile) {
       return <Preloader/>
    }
    return (
        <div>
            <div className={s.profile}>
                <img
                    src='https://source.unsplash.com/1600x900/?nature,water' alt='image'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div> {props.profile.contacts.github}</div>
                <div> {props.profile.contacts.twitter}</div>
                <div> {props.profile.fullName}</div>
            </div>
        </div>
    )
}

export default ProfileInfo