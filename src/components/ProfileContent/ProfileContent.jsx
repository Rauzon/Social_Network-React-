import React from 'react';
import contentStyle from './ProfileContent.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfileContent = (props) => {
    return (
        <div className={contentStyle.content}>
            <ProfileInfo/>
            <MyPostsContainer  />
        </div>
    );
}

export default ProfileContent;