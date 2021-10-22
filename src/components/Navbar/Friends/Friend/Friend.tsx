import s from './Friend.module.css'

type FriendPropsType = {
    name: string,
    avatar: string
}

 export const Friend = (props:FriendPropsType) => {

    return (
        <div className={s.item}>
            <img src={props.avatar} alt='avatar'/>
            <div>
            {props.name}
            </div>
        </div>

    )
}
