import React from "react";
import dialogStyle from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    return (
        <div className={dialogStyle.dialogItem}>
            <NavLink to={props.link}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;