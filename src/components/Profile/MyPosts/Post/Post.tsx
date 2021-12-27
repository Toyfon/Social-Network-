import s from './Post.module.css';
import React from "react";

type PostPropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = ({message,likesCount}) => {
    return (
        <div className={s.item}>
            <img
                src='https://www.blast.hk/attachments/68495/' alt=''/>
            {message}
            <div className={s.text}>
                <span>like</span> {likesCount}
            </div>
        </div>
    )
}

export default Post