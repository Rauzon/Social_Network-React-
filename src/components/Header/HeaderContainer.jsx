import React from 'react';
import Header from "./Header";
import {setAuthThunk} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.setAuthThunk();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authData: state.AuthData
    }
}

export default connect(mapStateToProps,{setAuthThunk})(HeaderContainer);