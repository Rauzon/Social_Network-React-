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
        </div>
    );
}

export default Message;