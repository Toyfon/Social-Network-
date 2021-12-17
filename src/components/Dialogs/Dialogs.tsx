import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import React, {ChangeEvent} from "react";
import {InitialDialogsPageStateType} from "../../Redux/dialogsPage-reducer";
import {Redirect} from "react-router-dom";

type DialogsType = {
    dialogsPage: InitialDialogsPageStateType
    updateNewMassageBody: (body: string) => void
    sendMessage: () => void
    isAuth:boolean
}


export const Dialogs: React.FC<DialogsType> = (props) => {
    let state = props.dialogsPage


    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map((m) => <Message message={m.message}/>)

    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMassageBody(body)
    }

/*    if (!props.isAuth) return <Redirect to={'/login'}/>*/

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
            <textarea placeholder="Enter your message"
                      value={newMessageBody}
                      onChange={(e) => onNewMessageChange(e)}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>
    )
}