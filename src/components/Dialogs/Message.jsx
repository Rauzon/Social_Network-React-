import React from "react";
import dialogStyle from './Dialogs.module.css';

const Message = (props) => {
    return (
        <div>
            <div className={dialogStyle.massege}>
                {props.message}
            </div>
        </div>
    );
}

export default Message;