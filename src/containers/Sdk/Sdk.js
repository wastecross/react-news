import React, { useEffect, useState } from "react";
import "./Sdk.css";
import { WebVerification } from "vdid-sdk-web";

const Sdk = () => {
  const [container, setContainer] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    window.addEventListener("message", (ev) => {
      if (typeof ev.data !== "object") return;
      if (!ev.data.type) return;
      if (ev.data.type !== "button-click") return;
      if (!ev.data.message) return;
      setImages(ev.data.message);
    });
  }, []);

  const onClickHandler = async () => {
    try {
      const publicApiKey = "";
      const vdid = new WebVerification(publicApiKey);
      const url = vdid.getUrlToOnlyCaptureImages();

      setContainer(
        <iframe src={url} title="Sdk VDID" allow="camera; microphone"></iframe>
      );
    } catch (error) {
      console.log(error);
      setContainer(<p style={{ color: "red" }}>ERROR</p>);
    }
  };

  return (
    <div className="Sdk">
      <div className="Sdk-header">
        <button className="Sdk-button" onClick={onClickHandler}>
          Test Me
        </button>
      </div>
      <div className="Sdk-container">{container}</div>
      <div>{images}</div>
    </div>
  );
};

export default Sdk;
