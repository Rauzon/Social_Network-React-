import React from 'react';
import contentStyle from './ProfileContent.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileContent = (props) => {

    return (
        <div className={contentStyle.content}>
            <ProfileInfo/>
            <MyPosts dataPost={props.dataPost} dispatch={props.dispatch} />
        </div>
    );
}

export default ProfileContent;