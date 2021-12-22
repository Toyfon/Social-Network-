import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React, {useCallback} from "react";
import {PostsType} from "../../../Redux/profilePage-reducer";
import {PostForm} from "../PostForm";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (post: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postElement = props.posts.map((p) =>
        <Post message={p.message} likesCount={p.likesCount}/>)


    let addNewPost = useCallback((newPostText: string) => {
        props.addPost(newPostText)
    }, [props])


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

export default MyPosts