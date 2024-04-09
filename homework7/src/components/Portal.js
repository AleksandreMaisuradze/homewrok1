import React from "react";
import { createPortal } from "react-dom"
import "./modal.css"

function Portal({ clickHandlerNo, clickHandlerYes }) {

    return createPortal(
        <div className="modal">
            Are you sure to delete post?
            <button onClick={clickHandlerYes}>Yes</button>
            <button onClick={clickHandlerNo}>No</button>
        </div>,
        document.getElementById("modal")
    );
};

export default Portal;
