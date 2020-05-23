import React from 'react';
import profileInfoStyle from './ProfileInfo.module.css';
import loader from '../../../img/hearts.svg';
import {Redirect} from "react-router-dom";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.userProfile){
        return <div className={profileInfoStyle.content__img_loader}><img src={loader} alt=""/></div>
    }

    // Redirect to 'login' (LoginComponent)
    if(!props.isLogining) return <Redirect to='/login' />


    return (
            <div className={profileInfoStyle.content}>
                <div className={profileInfoStyle.content__img}>
                    <img src="https://i.pinimg.com/originals/c9/1c/68/c91c68db94c679311d48dcb273afaedf.jpg" />
                </div>
                <div>
                    <span>FullName: {props.userProfile.fullName}</span>
                </div>
                <div>
                    <img src={props.userProfile.photos.large} alt=""/>
                </div>

                {/*ProfileStatus*/}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {/*ProfileStatus*/}

                <div>
                    <span>Information this profile:</span>
                    <div>
                        <span>About me: {props.userProfile.aboutMe}</span>
                    </div>
                    <div>
                        <span>Contacts:</span>
                    </div>
                    <div>
                        {/* need to refactore this!!*/}
                        {(props.userProfile.contacts.facebook) ? <div><span>My facebook: {props.userProfile.contacts.facebook}</span></div> : ""}
                        {(props.userProfile.contacts.website) ? <div><span>My website: {props.userProfile.contacts.website}</span></div> : ""}
                        {(props.userProfile.contacts.vk) ? <div><span>My vk: {props.userProfile.contacts.vk}</span></div> : ""}
                        {(props.userProfile.contacts.twitter) ? <div><span>My twitter: {props.userProfile.contacts.twitter}</span></div> : ""}
                        {(props.userProfile.contacts.instagram) ? <div><span>My instagram: {props.userProfile.contacts.instagram}</span></div> : ""}
                        {(props.userProfile.contacts.youtube) ? <div><span>My youtube: {props.userProfile.contacts.youtube}</span></div> : ""}
                        {(props.userProfile.contacts.github) ? <div><span>My github: {props.userProfile.contacts.github}</span></div> : ""}
                        {(props.userProfile.contacts.mainLink) ? <div><span>My mainLink: {props.userProfile.contacts.mainLink}</span></div> : ""}
                    </div>
                    <div>
                        <span>look for a job: {(props.userProfile.lookingForAJob) ? "Yeah": "No"}</span>
                    </div>
                    <div>
                        <span>It's Description what job you do to look for:</span>
                    </div>


                </div>
            </div>

    );
}

export default ProfileInfo;