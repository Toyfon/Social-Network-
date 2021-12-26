import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {PostsType} from "../../../Redux/profilePage-reducer";
import {PostForm} from "../PostForm";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (post: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    console.log("render")
    let postElement = props.posts.map((p) =>
        <Post message={p.message} likesCount={p.likesCount}/>)


    let addNewPost = (newPostText: string) => {
        props.addPost(newPostText)
    }


    return <div>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <PostForm addNewPost={addNewPost}/>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>

}

