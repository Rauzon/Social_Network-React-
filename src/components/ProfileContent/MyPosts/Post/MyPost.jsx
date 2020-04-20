import React from 'react';
import myPostStyle from './MyPost.module.css';

const MyPost = (props) => {

    return (
        <div className={myPostStyle.post}>
            <div className={myPostStyle.post_img}>
                <img
                    src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg"/>
            </div>
            <div className={myPostStyle.content}>
                <div className={myPostStyle.content_inner}>
                    <span>{props.content}</span>
                </div>
            </div>
        </div>
    );
}

export default MyPost;