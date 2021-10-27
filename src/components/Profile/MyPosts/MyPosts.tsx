import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

import { PostsType } from "../../../Redux/profilePage-reducer";





type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPostText:(text:string) => void
    addPost:()=> void
}




const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    debugger
    let postElement = props.posts.map((p) =>
        <Post message={p.message} likesCount={p.likesCount}/>)


    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText (text!)
    }




    return <div>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <button className={s.btn} onClick={addPost}>Add</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>

}

export default MyPosts