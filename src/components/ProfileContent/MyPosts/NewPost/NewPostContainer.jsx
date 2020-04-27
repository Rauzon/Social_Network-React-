import React from "react";
import {addPostActionCreater, changeAreaActionCreater} from "../../../../redux/profileData-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {
        onChangeArea: (text) => {
            dispatch(changeAreaActionCreater(text));
        },
        addPost: () => {
            dispatch(addPostActionCreater());
        }
    }
};

const NewPostContainer = connect(null,mapDispatchToProps)(NewPost);


export default NewPostContainer;