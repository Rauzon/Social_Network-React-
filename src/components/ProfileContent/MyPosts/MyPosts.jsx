import React from 'react';
import MyPost from './Post/MyPost';
import NewPostContainer from "./NewPost/NewPostContainer";


const MyPosts = (props) => {
    let state = props.store.getState();
    const myPosts = state.ProfileData.myPostData.map((post) => {
        return(
            <MyPost content={post.content} />
        );
    })

    return (
        <div>
            Page's posts
            <NewPostContainer  />
            <div>
                {myPosts}
            </div>
        </div>
    );
}

export default MyPosts;