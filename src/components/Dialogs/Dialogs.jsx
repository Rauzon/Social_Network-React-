import React from "react";
import dialogStyle from './Dialogs.module.css';
import DialogItem from "./PartOfDilogs/DialogItem";
import Message from "./PartOfDilogs/Message";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";


const Dialogs = (props) => {
    let dialoges = props.dialogs.map((dialog) => {
        return (
            <DialogItem name={dialog.name} link={dialog.link}/>
        );
    });
    let messageOfUser = props.messages.map((mess) => {
        return (
            <Message message={mess.message}/>
        )
    });

    // for FormMessage
    const onSubmit = (formData) => {
        props.addMessage(formData.textareaMessage);
    }

    return (
        <div className={dialogStyle.dialogs}>
            <div className={dialogStyle.dialogWrapper}>
                <div className={dialogStyle.dialog}>
                    {dialoges}
                </div>
                <div className={dialogStyle.masseges}>
                    <div>
                        {messageOfUser}
                    </div>
                    <ReduxFormMessage {...props} onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}

const FormMessage = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name={'textareaMessage'} component={'textarea'}   />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
}

const ReduxFormMessage = reduxForm({form: 'formMessage'})(FormMessage);

export default Dialogs;