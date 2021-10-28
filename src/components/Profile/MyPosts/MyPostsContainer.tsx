

import {addPostAC, updateNewPostTextAC} from "../../../Redux/profilePage-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";



let mapStateToProps = (state: AppStateType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text!))
        },
        addPost: () => {
            dispatch(addPostAC())

        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer