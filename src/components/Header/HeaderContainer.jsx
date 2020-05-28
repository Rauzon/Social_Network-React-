import React from 'react';
import Header from "./Header";
import {putLoginOutThunk, setAuthThunk} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.setAuthThunk();
    }

    render() {
        return (
            <Header {...this.props} logOut={this.props.putLoginOutThunk}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authData: state.AuthData,
        isLogining:state.AuthData.isLogining
    }
}

export default connect(mapStateToProps,{setAuthThunk, putLoginOutThunk})(HeaderContainer);