import React from "react";
import newPostStyle from "./NewPosts.module.css";


const NewPost =(props) => {

    let newPostAreaContent = React.createRef();
    let alertFun = () => {
        props.addPost();
    };
    let changeArea = () => {
      let text = newPostAreaContent.current.value;
            props.changeText(text);
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
                    <button onClick={alertFun}>Опубликовать</button>
                </div>
            </div>
        </div>
    );
}


export default NewPost;