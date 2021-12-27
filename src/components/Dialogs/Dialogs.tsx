import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React, {useCallback} from "react";
import {InitialDialogsPageStateType} from "../../Redux/dialogsPage-reducer";
import {DialogsForm} from "./DialogsForm";

type DialogsType = {
    dialogsPage: InitialDialogsPageStateType
    updateNewMassageBody: (body: string) => void
    sendMessage: (values: string) => void
    isAuth: boolean
}


export const Dialogs: React.FC<DialogsType> = ({dialogsPage,
                                                   updateNewMassageBody,
                                                   sendMessage,
                                                   isAuth,...props}) => {

    let state = dialogsPage

    let dialogsElements = state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map((m) => <Message key={m.id} message={m.message}/>)

    let addNewMessage = useCallback((newMessageBody: string) => {
        sendMessage(newMessageBody)
    }, [sendMessage])

    /*    if (!props.isAuth) return <Redirect to={'/login'}/>*/

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <DialogsForm addNewMessage={addNewMessage}/>
            </div>
        </div>
    )
}

