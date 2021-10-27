const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export type ActionsType = ReturnType <typeof addPostAC> | ReturnType <typeof updateNewPostTextAC>

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type InitialProfilePageStateType = {
    posts: Array<PostsType>
    newPostText: string
}


let initialState: InitialProfilePageStateType = {
    posts: [
        {id: 1, message: 'HI! My name is Vova', likesCount: 11},
        {id: 2, message: 'I\'m waiting for you', likesCount: 12},
        {id: 3, message: 'Good luck and have fun!', likesCount: 35},
        {id: 4, message: 'Hey you!', likesCount: 24},
    ],
        newPostText: ' '
};

const profileReducer = (state= initialState, action: ActionsType): InitialProfilePageStateType=> {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = ' ';
            return {...state,
                newPostText:'',
                posts: [newPost,...state.posts]
            }
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return {...state}
        default:
            return state
    }
};


export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

export default profileReducer;


