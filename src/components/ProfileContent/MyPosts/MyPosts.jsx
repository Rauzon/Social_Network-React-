import React from 'react';
import MyPost from './Post/MyPost';
import NewPost from "./NewPost/NewPost";


const MyPosts = (props) => {
debugger;
    const myPosts = props.dataPost.myPostData.map((post) => {
        return(
            <MyPost  content={post.content} />
        );
    })

    return (
        <div>
            Page's posts
            <NewPost addPost={props.addPost} dataPost={props.dataPost} changeText={props.changeText}/>
            <div>
                {myPosts}
            </div>
        </div>
    );
}

export default MyPosts;