import React from 'react';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
    return {
        postsContent: state.ProfileData.myPostData
    }
}


const MyPostsContainer = connect(mapStateToProps, null)(MyPosts);

export default MyPostsContainer;