import React from "react";
import dialogStyle from './Dialogs.module.css';

const Message = (props) => {

    let input = React.createRef();

    const addInput = () => {
        let alertInput = input.current.value;
        alert(alertInput);
    }

    return (
        <div>
            <div className={dialogStyle.massege}>
                {props.message}
            </div>
            <div className={dialogStyle.dialogText}>
                <textarea className={dialogStyle.dialogText_textarea} ref={input}></textarea>
                <button className={dialogStyle.dialogText_button} onClick={addInput}>Отправить</button>
            </div>
        </div>
    );
}

export default Message;