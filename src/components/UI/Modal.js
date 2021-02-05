import React from "react";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="Modal">
      <div className="Modal-content">
        <span className="Modal-close" onClick={props.click}>
          &times;
        </span>
        <div className="Modal-message">
          {props.icon ? (
            <img
              src={props.icon}
              alt="Icon"
              style={{ margin: "0 0.7rem", width: "2rem" }}
            />
          ) : null}
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default Modal;
