import {compose, Dispatch} from "redux";
import {RootReducerType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator} from "../../Redux/dialogsPage-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";


let mapStateToProps = (state: RootReducerType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(Dialogs)