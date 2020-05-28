import React from "react";
import style from './textarea.module.css';

export const ElementHOC = Element =>  ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={style.wrap__content + ' ' + ((hasError) ? style.error :" ") } >
            <Element  {...input} {...props} />
            {(hasError) && <span className={style.wrap__content_span}>{meta.error}</span>}
        </div>

    )
}