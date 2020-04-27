import React from "react";
import dialogStyle from './Dialogs.module.css';
import DialogItem from "./PartOfDilogs/DialogItem";
import Message from "./PartOfDilogs/Message";

const Dialogs = (props) => {
    let dialoges = props.dialogs.map((dialog) => {
        return (
            <DialogItem name = {dialog.name} link = {dialog.link} />
        );
    });
    let messageOfUser = props.messages.map((mess) => {
       return(
           <Message  message ={mess.message} />
       )
    });

    let onTextareaLink = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };
    let changeMessage =() => {
        let onTextareaTrigger = onTextareaLink.current.value;
        props.onChangeTextarea(onTextareaTrigger);
    };

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
                    <div>
                        <div><textarea onChange={changeMessage} value={props.dialogValue} ref={onTextareaLink} /></div>
                        <div>
                            <button onClick={addMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;