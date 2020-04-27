import React from "react";
import {addMessageActionCreater, updateMessageActionCreater} from "../../redux/dialogData-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//
//     let state = props.store.getState();
//
//     let addMessage = () => {
//         props.store.dispatch(addMessageActionCreater());
//     };
//     let changeMessage =(onTextareaTrigger) => {
//
//         props.store.dispatch(updateMessageActionCreater(onTextareaTrigger));
//     };
//
//     return (
//         <div className={dialogStyle.dialogs}>
//            <Dialogs onChangeTextarea={changeMessage}
//                     addMessage={addMessage}
//                     dialogs={state.DialogData.dialogData}
//                     messages={state.DialogData.messagesData}
//                     dialogValue={state.DialogData.newMessage}
//            />
//         </div>
//     );
// }

const mapStateToProps = (state) => {
    return {
        dialogs: state.DialogData.dialogData,
        messages: state.DialogData.messagesData,
        dialogValue: state.DialogData.newMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeTextarea: (onTextareaTrigger) => {
            dispatch(updateMessageActionCreater(onTextareaTrigger));
        },
        addMessage: () => {
            dispatch(addMessageActionCreater());
        }
    }
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;