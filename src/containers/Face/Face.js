import React, { useState } from "react";
import "./Face.css";
import FaceRecognition from "../../components/FaceRecognition/FaceRecognition";
import Liveness from "../../components/Liveness/Liveness";

const Face = () => {
  const [mode, setMode] = useState("liveness");
  const selectedColor = "#3d81da";
  const unSelectedColor = "#95bff7";

  const onChangeModeHandler = (changeTo, color) => {
    setMode(changeTo);
  };

  return (
    <div className="Face">
      <div className="Face-header">
        <button
          className="Face-button"
          style={{
            backgroundColor:
              mode === "liveness" ? selectedColor : unSelectedColor,
          }}
          onClick={() => onChangeModeHandler("liveness", "#3d81da")}
        >
          Liveness
        </button>
        <button
          className="Face-button"
          style={{
            backgroundColor:
              mode === "recognition" ? selectedColor : unSelectedColor,
          }}
          onClick={() => onChangeModeHandler("recognition", "")}
        >
          Recognition
        </button>
      </div>
      <div className="Face-container">
        {mode === "liveness" ? <Liveness /> : <FaceRecognition />}
      </div>
    </div>
  );
};

export default Face;
