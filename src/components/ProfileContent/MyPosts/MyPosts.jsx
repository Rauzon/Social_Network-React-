import React from 'react';
import MyPost from './Post/MyPost';
import NewPost from "./NewPost/NewPost";


const MyPosts = (props) => {
    const myPosts = props.dataPost.myPostData.map((post) => {
        return(
            <MyPost  content={post.content} />
        );
    })

    return (
        <div>
            Page's posts
            <NewPost dispatch={props.dispatch} dataPost={props.dataPost} />
            <div>
                {myPosts}
            </div>
        </div>
    );
}

export default MyPosts;