import React, { useState } from "react";
import { WebVerification } from "vdid-sdk-web";
import "./Liveness.css";

const Liveness = () => {
  const [identifier, setIdentifier] = useState(null);
  const vdid = new WebVerification(
    "pk_test_ElTXm0vy1O1D44zIemBiniFqQzYPnMiURuo2tFkRHyY="
  );

  const onChangeHandler = (event) => {
    setIdentifier(event.target.value);
  };

  const onSendTestHandler = () => {
    vdid.verifyIdentity(identifier, { method: "popup" });
  };

  return (
    <div className="Liveness">
      <input
        className="Liveness-input"
        onChange={(e) => onChangeHandler(e)}
        placeholder="UUID identifier"
        value={identifier}
      />
      <button className="Liveness-button" onClick={onSendTestHandler}>
        Test Liveness
      </button>
    </div>
  );
};

export default Liveness;
