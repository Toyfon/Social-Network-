import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AllACType} from "../../Redux/redux-store";
import React, {ChangeEvent} from "react";
import {InitialStateType, sendMessageCreator, updateNewMassageBodyCreator} from "../../Redux/dialogsPage-reducer";

type DialogsType = {
    dialogsPage: InitialStateType
    dispatch: (action: AllACType) => void
}


export const Dialogs: React.FC<DialogsType> = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message}/>)

    let newMessageBody = props.dialogsPage.newMessageBody


    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMassageBodyCreator(body))
    }

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