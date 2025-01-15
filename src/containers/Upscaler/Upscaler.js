import React from "react";
// import Upscaler from "upscaler";
import image from "../../assets/templates/CaseErrorFront_01.jpg";
import "./Upscaler.css";

const UpscalerCmpnt = () => {
  const onClickHandler = () => {
    // const upscaler = new Upscaler();
    // upscaler.upscale(image).then((upscaledImage) => {
    //   console.log(upscaledImage); // base64 representation of image src
    // });
  };

  return (
    <div className="Upscaler">
      <div className="Upscaler-header">
        <button className="Upscaler-button" onClick={onClickHandler}>
          Upscaler image
        </button>
      </div>
    </div>
  );
};

export default UpscalerCmpnt;
