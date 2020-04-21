import React from "react";
import dialogStyle from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = (props) => {



    let dialoges = props.dialog.dialogData.map((dialog) => {
        return (
            <DialogItem name = {dialog.name} link = {dialog.link} />
        );
    });
    let messages = props.message.messagesData.map((message) => <Message message={message.message} />);

    return (
        <div className={dialogStyle.dialogs}>
            <div className={dialogStyle.dialogWrapper}>
                <div className={dialogStyle.dialog}>
                    {dialoges}
                </div>
                <div className={dialogStyle.masseges}>
                    <div>
                        {messages}
                    </div>
                    <div>
                        <div><textarea /></div>
                        <div>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;