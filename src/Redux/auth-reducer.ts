

export type InitialStateType = {
    id:number | null
    email: string | null
    login: string | null
    isAuth:boolean
}



let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default:
            return state
    }
};


export type ActionsType = ReturnType<typeof setAuthUserDataAC>



export const setAuthUserDataAC = (id:number,email:string,login:string) => ({type: "SET_USER_DATA", data: {id,email,login}} as const)




export default authReducer;


