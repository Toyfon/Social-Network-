import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";


type dialogItemPropsType = {
    name: string
    id: number
}
 export const DialogItem: React.FC<dialogItemPropsType> = (props) => {
    let path = "/dialogs/" + props.id
    return (
     <div className={s.dialog + ' ' + s.active}>
         <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU' alt=""/>
         <div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
     </div>
    )
}


