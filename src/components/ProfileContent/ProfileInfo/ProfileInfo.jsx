import React from 'react';
import profileInfoStyle from './ProfileInfo.module.css';

const ProfileInfo = () => {
    
    return (
            <div className={profileInfoStyle.content}>
                <div className={profileInfoStyle.content_img}>
                    <img src="https://i.pinimg.com/originals/c9/1c/68/c91c68db94c679311d48dcb273afaedf.jpg" />
                </div>
                <div>
                    avatar + description
                </div>
            </div>

    );
}

export default ProfileInfo;