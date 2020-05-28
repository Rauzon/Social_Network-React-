import React from "react";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {putLoginThunk} from "../../redux/auth-reducer";
import {ElementHOC} from "../ComponentForValidators/Textarea";
import {required} from "../ProfileContent/Utilits/Validators/validator";
import {Redirect} from "react-router-dom";


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Input = ElementHOC('input'); // call in Field component of form
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <Field component={Input} name='email' type="text" placeholder={'login'} validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} name='password' type="text" placeholder={"password"} type={'password'} validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} name='checkbox' type="checkbox"  />
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
        let {email, password, checkbox} = {...formData};
        props.putLoginThunk(email, password, checkbox);
    }
    if(props.isLogining){
        return <Redirect to={'/profile'}/>
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

const mapStateToProps = (state) => {
    return {
        isLogining: state.AuthData.isLogining
    }
}

export const LoginComponentHOC = connect(mapStateToProps, {putLoginThunk})(LoginComponent);