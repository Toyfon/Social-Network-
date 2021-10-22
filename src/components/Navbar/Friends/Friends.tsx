import s from './Friends.module.css'
import {Friend} from "./Friend/Friend";
import {FriendsBarType} from "../../../Redux/friendsBar-reducer";
import React from "react";



 export const Friends: React.FC<FriendsBarType> = (props) => {

     let friendElement = props.friends.map((f) => <Friend name={f.name} avatar={f.avatar}  />)

    return (
        <div>
        <h3 className={s.title}>Friends</h3>
        <div className={s.fr}>
            {friendElement}
        </div>
        </div>
    )
}

