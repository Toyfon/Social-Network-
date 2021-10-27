
import React from "react";

import {addPostAC, updateNewPostTextAC} from "../../../Redux/profilePage-reducer";
import { AppStateType} from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";
import {Store} from "redux";




type MyPostsPropsType = {
    store: Store<AppStateType,any>
   /* profilePage: InitialStateType*/
   /* posts: Array<PostsType>
    newPostText: string
    dispatch: (action: AllACType  ) => void*/
}




const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch (addPostAC())
    }

    let onPostChange = (text:string) => {
        props.store.dispatch(updateNewPostTextAC(text!))
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}
                 posts={state.profilePage.posts}
        />

    )


}

export default MyPostsContainer