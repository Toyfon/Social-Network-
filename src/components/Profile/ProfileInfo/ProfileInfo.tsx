import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://source.unsplash.com/1600x900/?nature,water' alt='image'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desсription
            </div>
        </div>
    )
}

export default ProfileInfo