const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'



export type UserType = any


export type InitialUsersPageStateType = {
    users:UserType[]
}



let initialState:InitialUsersPageStateType = {
    users: [],
};

const usersReducer = (state = initialState, action: ActionsType): InitialUsersPageStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:state.users.map( u => {
                    if (u.id === action.userId) {
                     return {...u, followed:true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed:false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
};

export type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (userId:number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId:number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users:[]) => ({type: SET_USERS, users} as const)

export default usersReducer;


