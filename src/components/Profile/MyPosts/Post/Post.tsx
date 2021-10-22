import s from './Post.module.css';
import React from "react";

type PostPropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://www.blast.hk/attachments/68495/'/>
            {props.message}
            <div className={s.text}>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post