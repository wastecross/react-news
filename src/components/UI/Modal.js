import React from "react";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="Modal">
      <div
        className="Modal-content"
        style={props.type === "b64" ? { height: "60%" } : {}}
      >
        <span className="Modal-close" onClick={props.click}>
          &times;
        </span>
        {props.type === "b64" ? (
          <textarea style={{ height: "100%", width: "80%" }}>
            {props.text}
          </textarea>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Modal;
