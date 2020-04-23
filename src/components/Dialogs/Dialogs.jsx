import React from "react";
import dialogStyle from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import Message from "./Message";
import {addMessageActionCreater, updateMessageActionCreater} from "../../redux/state";

const Dialogs = (props) => {
    let dialoges = props.message.dialogData.map((dialog) => {
        return (
            <DialogItem name = {dialog.name} link = {dialog.link} />
        );
    });
    let messageOfUser = props.message.messagesData.map((mess) => {
       return(
           <Message  message ={mess.message} />
       )
    });


    let onTextareaLink = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreater());
    };
    let changeMessage =() => {
        let onTextareaTrigger = onTextareaLink.current.value;
        props.dispatch(updateMessageActionCreater(onTextareaTrigger));
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
                        <div><textarea onChange={changeMessage} value={props.message.newMessage} ref={onTextareaLink} /></div>
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