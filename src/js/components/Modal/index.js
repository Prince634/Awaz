import React from "react";
import { container,modalHeader, closeIcon, modalContent, modalOverlay, modalBody, errMsg, inputField } from "./style";

const Modal = ({ type, title, isError, errMessage }) => {
    return (
        <React.Fragment>
            <div className={modalOverlay}>
            <div className={modalContent}>
            <div className={closeIcon}>
            <div className={container}>
                <div className={modalHeader}><p>{title}</p></div>
                <div className={modalBody}>
    {isError ? <span className={errMsg}>{errMessage}</span> : ('')}
                    <input type="text" className={inputField} placeholder="Username or Email" name="username"/>
                    <input type="password" className={inputField} placeholder="Password" name="password"/>                    
                </div>
            </div>
            </div>
            </div>
            </div>
        </React.Fragment>
    )
};

export default Modal;