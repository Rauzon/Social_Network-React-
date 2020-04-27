import React from "react";
import {addPostActionCreater, changeAreaActionCreater} from "../../../../redux/profileData-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

// const NewPostContainer =(props) => {
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreater());
//     };
//     let onChangeArea = (text) => {
//             props.store.dispatch(changeAreaActionCreater(text));
//     };
//
//
//     return(
//         <div>
//             <NewPost onChangeArea={onChangeArea} addPost={addPost}/>
//         </div>
//     );
// }

const mapStateToProps = (state) => {
    return {

    }
} ;

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

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);


export default NewPostContainer;