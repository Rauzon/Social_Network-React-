import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const withStateHOC = (state) => {
    return {
        isLogining: state.AuthData.isLogining
    }
}

export let withRedirectComponent = (Component) => {

    const withRedirect = (props) => {
        if(!props.isLogining) return <Redirect to='/login' />
        return <Component {...props}/>
    }
    let ConnectredirectComponentHOC = connect(withStateHOC)(withRedirect);

    return ConnectredirectComponentHOC;
}


