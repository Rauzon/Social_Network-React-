import React from "react";
import dialogStyle from './Dialogs.module.css';
import DialogItem from "./PartOfDilogs/DialogItem";
import Message from "./PartOfDilogs/Message";
import {addMessageActionCreater, updateMessageActionCreater} from "../../redux/dialogData-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreater());
    };
    let changeMessage =(onTextareaTrigger) => {

        props.store.dispatch(updateMessageActionCreater(onTextareaTrigger));
    };

    return (
        <div className={dialogStyle.dialogs}>
           <Dialogs onChangeTextarea={changeMessage}
                    addMessage={addMessage}
                    dialogs={state.DialogData.dialogData}
                    messages={state.DialogData.messagesData}
                    dialogValue={state.DialogData.newMessage}
           />
        </div>
    );
}

export default DialogsContainer;