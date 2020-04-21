import React from "react";
import newPostStyle from "./NewPosts.module.css";
import {addPostActionCreater, changeAreaActionCreater} from "../../../../redux/state";

const NewPost =(props) => {

    let newPostAreaContent = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreater());
    };
    let changeArea = () => {
      let text = newPostAreaContent.current.value;
            props.dispatch(changeAreaActionCreater(text));
    };


    return(
        <div>
            <div className={newPostStyle.newPost}>
                new post
                <div className={newPostStyle.newPost_textarea}>
                    <label>Content:</label>
                    <textarea ref={newPostAreaContent} onChange={changeArea} value={props.dataPost.content}></textarea>
                </div>
                <div className={newPostStyle.newPost_button}>
                    <button onClick={addPost}>Опубликовать</button>
                </div>
            </div>
        </div>
    );
}


export default NewPost;