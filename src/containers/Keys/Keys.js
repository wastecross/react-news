import React, { useState } from "react";
import "./Keys.css";
import Modal from "../../components/UI/Modal";
import check from "../../assets/icons/awesome-check.svg";
import failed from "../../assets/icons/awesome-fail.svg";

const Keys = () => {
  const [showModal, setShowModal] = useState(<span />);

  const onCloseModalHandler = () => {
    setShowModal(<span />);
  };

  const onClickHandler = () => {
    setShowModal(
      <Modal
        text="Failed to generate token"
        click={onCloseModalHandler}
        icon={failed}
      />
    );
  };

  return (
    <div className="Keys">
      <div className="Keys-header">
        <button className="Keys-button" onClick={onClickHandler}>
          Generate Token
        </button>
      </div>
      {showModal}
    </div>
  );
};

export default Keys;
