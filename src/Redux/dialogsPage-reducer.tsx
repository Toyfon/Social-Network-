
const SEND_MESSAGE = 'SEND_MESSAGE'


export type InitialDialogsPageStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}
export type DialogType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

export type ActionsType =  ReturnType<typeof sendMessageCreator>


let initialState: InitialDialogsPageStateType = {
    dialogs: [
        {id: 1, name: 'Vova'},
        {id: 2, name: 'Tolya'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Kostya'},
        {id: 5, name: 'Valya'},
        {id: 6, name: 'Sveta'},
        {id: 7, name: 'Tanya'}

    ],
    messages: [
        {id: 1, message: 'HI'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Ho.w are you'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
        {id: 7, message: 'Здарова'},
    ]
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialDialogsPageStateType => {
    switch (action.type) {
        case "SEND_MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: body}]
            };
        default:
            return state
    }
};


export let sendMessageCreator = (newMessageBody:string) => ({type: SEND_MESSAGE,newMessageBody} as const)

export default dialogsReducer