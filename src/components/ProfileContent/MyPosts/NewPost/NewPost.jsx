import React from "react";
import newPostStyle from "./NewPosts.module.css";

const NewPost =(props) => {

    let newPostAreaContent = React.createRef();
    let addPost = () => {
        props.addPost();
    };
    let changeArea = () => {
      let text = newPostAreaContent.current.value;
        props.onChangeArea(text);
    };


    return(
        <div>
            <div className={newPostStyle.newPost}>
                new post
                <div className={newPostStyle.newPost_textarea}>
                    <label>Content:</label>
                    <textarea ref={newPostAreaContent} onChange={changeArea} ></textarea>
                </div>
                <div className={newPostStyle.newPost_button}>
                    <button onClick={addPost}>Опубликовать</button>
                </div>
            </div>
        </div>
    );
}


export default NewPost;