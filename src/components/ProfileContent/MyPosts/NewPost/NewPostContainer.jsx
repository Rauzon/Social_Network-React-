import React from "react";
import {addPostActionCreater, changeAreaActionCreater} from "../../../../redux/profileData-reducer";
import NewPost from "./NewPost";

const NewPostContainer =(props) => {

    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    };
    let onChangeArea = (text) => {
        debugger;
            props.store.dispatch(changeAreaActionCreater(text));
    };


    return(
        <div>
            <NewPost onChangeArea={onChangeArea} addPost={addPost}/>
        </div>
    );
}


export default NewPostContainer;