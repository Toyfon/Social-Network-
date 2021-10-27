import React from "react";
import {
    sendMessageCreator,
    updateNewMassageBodyCreator
} from "../../Redux/dialogsPage-reducer";
import {Store} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsType = {
    store: Store<AppStateType, any>
}


export const DialogsContainer: React.FC<DialogsType> = (props) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMassageBodyCreator(body))
    }

    return <Dialogs updateNewMassageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}/>
}

export default DialogsContainer