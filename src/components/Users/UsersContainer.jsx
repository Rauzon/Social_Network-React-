import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreater, setUsersActionCreator, unfollowActionCreater} from "../../redux/user-reducer";
import UsersClass from "./UsersClass";


const mapStateToProps = (state) => {
    return {
        users: state.UsersData.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreater(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreater(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
};



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);


export default UsersContainer;