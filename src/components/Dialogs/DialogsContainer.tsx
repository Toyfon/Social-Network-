import {Dispatch} from "redux";
import {RootReducerType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMassageBodyCreator} from "../../Redux/dialogsPage-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state: RootReducerType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        updateNewMassageBody: (body: string) => {
            dispatch (updateNewMassageBodyCreator(body))
        },
        sendMessage: () => {
          dispatch (sendMessageCreator())
        }
    }

}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer