import React, { useState } from "react";
import "./FaceRecognition.css";

const FaceRecognition = () => {
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [selectedFileFace, setSelectedFileFace] = useState(null);

  const fileSelectedHandler = (event, type) => {
    if (type === "id") {
      setSelectedFileId(event.target.files[0]);
    } else {
      setSelectedFileFace(event.target.files[0]);
    }
  };

  const fileUploadedHandler = () => {
    console.log("id: ", selectedFileId);
    console.log("face: ", selectedFileId);
  };

  return (
    <div className="FaceRecognition">
      <div className="FaceRecognition-images">
        <div className="FaceRecognition-first">
          <input
            type="file"
            onChange={(event) => fileSelectedHandler(event, "id")}
          />
          <button
            className="FaceRecognition-button-upload"
            onClick={fileUploadedHandler}
          >
            Upload
          </button>
        </div>
        <div className="FaceRecognition-second">
          <input
            type="file"
            onChange={(event) => fileSelectedHandler(event, "face")}
          />
          <button
            className="FaceRecognition-button-upload"
            onClick={fileUploadedHandler}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
