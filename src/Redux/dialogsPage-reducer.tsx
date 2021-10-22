import {ActionsType, DialogsPageType} from "./State";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = ''
            state.messages.push({id: 8, message: body},)
           return state;

        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.body;
            return state;
        default:
            return state
    }
}
export let updateNewMassageBodyCreator = (body:string) => ({type:UPDATE_NEW_MESSAGE_BODY, body: body} as const )
export let sendMessageCreator = () => ({type:SEND_MESSAGE} as const)

export default dialogsReducer