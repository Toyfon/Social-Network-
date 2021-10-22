import {ActionsType, ProfilePageType} from "./State";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
}


export const addPostCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

export default profileReducer;


