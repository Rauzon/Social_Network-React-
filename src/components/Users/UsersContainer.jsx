import React from "react";
import {connect} from "react-redux";
import {
    disabledButton, followThunk, getCurrentPagesThunk, getUsersThunk,
    setCurrentPage, unfollowThunk
} from "../../redux/user-reducer";
import Users from "./Users";
import loader from '../../img/hearts.svg';
import style from "./users.module.css";
import {withRedirectComponent} from "../HOC/withAuthRedirect";
import {compose} from "redux";

class UsersAPIContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
            this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }
    onClickChange= (p) => {
        this.props.getCurrentPagesThunk(p, this.props.pageSize);
    }
    render() {
        return (<div>
            <div className={style.loader}>
               {(this.props.isChanging) ? <img src={loader} alt=""/> :
                   null}
            </div>
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onClickChange={this.onClickChange}
                   users ={this.props.users}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
                   isDisabledButton={this.props.isDisabledButton}
                   isLogining={this.props.isLogining}
                    />
         </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        users: state.UsersData.users,
        pageSize: state.UsersData.pageSize,
        totalCount: state.UsersData.totalCount,
        currentPage: state.UsersData.currentPage,
        isChanging:state.UsersData.isChanging,
        isDisabledButton: state.UsersData.isDisabledButton,
    }
};


export const UsersCompose = compose(connect(mapStateToProps, {
    setCurrentPage,
    disabledButton,
    getUsersThunk,
    getCurrentPagesThunk,
    unfollowThunk,
    followThunk
}),
    withRedirectComponent
)(UsersAPIContainer)