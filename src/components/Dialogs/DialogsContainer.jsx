import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRedirectComponent} from "../HOC/withAuthRedirect";
import {addMessage, onChangeTextarea} from "../../redux/dialogData-reducer";
import {compose} from "redux";




const mapStateToProps = (state) => {
    return {
        dialogs: state.DialogData.dialogData,
        messages: state.DialogData.messagesData,
        dialogValue: state.DialogData.newMessage,
    }
}


const DialogsContainer = compose(connect(mapStateToProps, ({onChangeTextarea, addMessage})),
        withRedirectComponent
    )
(Dialogs);


export default DialogsContainer;