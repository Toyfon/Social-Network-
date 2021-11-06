const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

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
    posts: [],
    newPostText: ' '
};

const profileReducer = (state = initialState, action: ActionsType): InitialProfilePageStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = ' ';
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
};


export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

export default profileReducer;


