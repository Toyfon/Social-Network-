import s from './../Dialogs.module.css'
import React from "react";



type MessagePropsType = {
    message: string
}
 export const Message: React.FC<MessagePropsType> = ({message,...props}) => {
    return (
        <div className={s.dialog}>
            <div className={s.message}>
            {message}
        </div>
        </div>
    )
}


