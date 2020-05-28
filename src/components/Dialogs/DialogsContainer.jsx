import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRedirectComponent} from "../HOC/withAuthRedirect";
import {addMessage} from "../../redux/dialogData-reducer";
import {compose} from "redux";




const mapStateToProps = (state) => {
    return {
        dialogs: state.DialogData.dialogData,
        messages: state.DialogData.messagesData,
        dialogValue: state.DialogData.newMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        addMessage: (newMessage) => {
            dispatch(addMessage(newMessage))
        }
    }
}


const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps),
        withRedirectComponent
    )
(Dialogs);

export default DialogsContainer;