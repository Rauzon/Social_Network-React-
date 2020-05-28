import React from "react";
import {addPostActionCreater} from "../../../../redux/profileData-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreater(newPost));
        }
    }
};

const NewPostContainer = connect(null,mapDispatchToProps)(NewPost);


export default NewPostContainer;