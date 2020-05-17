import React from 'react';
import contentStyle from './ProfileContent.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfileContent = (props) => {
    return (
        <div className={contentStyle.content}>
            <ProfileInfo userProfile={props.userProfile} status={props.status} {...props} updateStatus={props.updateStatus}/>
            <MyPostsContainer  />
        </div>
    );
}

export default ProfileContent;