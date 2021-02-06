import React, { useState } from 'react';

import './Modal.css';
import copy from '../../assets/icons/copy.svg';

const Modal = (props) => {
  const [text, setText] = useState(null);
  const onCopyHanlder = () => {
    text.select();
    document.execCommand('copy');
  };

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
          <textarea
            style={{ height: "100%", width: "80%" }}
            ref={(textarea) => setText(textarea)}
            value={props.text}
            readOnly
          />
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
        {props.type === "b64" ? (
          <span onClick={onCopyHanlder}>
            <img className="Modal-copy" src={copy} alt={"copy"} />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
