import {addPostAC} from "../../../Redux/profilePage-reducer";
import {RootReducerType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";


let mapStateToProps = (state: RootReducerType) => {
    return {
        posts: state.profilePage.posts
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer