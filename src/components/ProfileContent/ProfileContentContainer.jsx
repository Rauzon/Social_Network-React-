import React from 'react';
import {connect} from "react-redux";
import ProfileContent from "./ProfileContent";
import {getStatusThunk, setProfileThunk, updateStatusThunk} from "../../redux/profileData-reducer";
import {withRouter} from "react-router-dom";
import {withRedirectComponent} from "../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContentContainer extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
             userId = 2;
        }
        debugger
        this.props.setProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }
    render() {
        return (
            <div>
                <ProfileContent  {...this.props} status={this.props.status} userProfile={this.props.userProfile} updateStatus={this.props.updateStatusThunk}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.ProfileData.userProfile,
        status: state.ProfileData.status
    }
}
export const ProfileContentAPI = compose(connect(mapStateToProps,{
    setProfileThunk,
    getStatusThunk,
    updateStatusThunk
}),
    withRouter,
    withRedirectComponent
)(ProfileContentContainer)




