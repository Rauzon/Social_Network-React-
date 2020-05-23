import React from "react";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <Field component={'input'} name='login' type="text" placeholder={'login'}/>
                </div>
                <div>
                    <Field component={'input'} name='password' type="text" placeholder={"password"}/>
                </div>
                <div>
                    <Field component={'input'} name='checkbox' type="checkbox"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

const LoginReduxForm = reduxForm({form: 'authorization'})(LoginForm)


export const LoginComponent = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <span><h2>login</h2></span>
            <div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>

    )
}



const LoginComponentHOC = connect(mapStateToProps, {})(LoginComponent);