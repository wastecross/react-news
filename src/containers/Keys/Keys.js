import React, { useState } from "react";
import "./Keys.css";
import Modal from "../../components/UI/Modal";
import check from "../../assets/icons/awesome-check.svg";
import failed from "../../assets/icons/awesome-fail.svg";
import {
  audience,
  client_id,
  client_secret,
  grant_type,
  urlToken,
} from "../../fixtures/token.fixture";

const Keys = () => {
  const [showModal, setShowModal] = useState(<span />);

  const onCloseModalHandler = () => {
    setShowModal(<span />);
  };

  const onClickHandler = async () => {
    const response = await fetch(urlToken, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ client_id, client_secret, audience, grant_type }),
    });
    const result = await response.json();

    setShowModal(
      <Modal
        text={JSON.stringify(result.scope)}
        click={onCloseModalHandler}
        icon={response.ok ? check : failed}
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
