import React, { useState, useEffect } from "react";
import "./FaceRecognition.css";
import { urlDetect, urlVerify } from "../../fixtures/face.fixture";
import Modal from "../UI/Modal";
import warning from "../../assets/icons/warning.svg";
import check from "../../assets/icons/awesome-check.svg";
import fail from "../../assets/icons/awesome-fail.svg";
import { labels } from "../../fixtures/faceRecognition.fixture";

const FaceRecognition = () => {
  const [dataId, setDataId] = useState(null);
  const [dataFace, setDataFace] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [imageFace, setImageFace] = useState(null);
  const [contentId, setContentId] = useState(<span />);
  const [contentFace, setContentFace] = useState(<span />);
  const [isSelectedId, setIsSelectedId] = useState(false);
  const [isSelectedFace, setIsSelectedFace] = useState(false);
  const [typeImage, setTypeImage] = useState(null);
  const [isClickedVerify, setIsClickedVerify] = useState(false);
  const [showModal, setShowModal] = useState(<span />);

  const onCloseModalHandler = () => {
    setShowModal(<span />);
  };

  useEffect(() => {
    const handleTypeImage = async () => {
      const headers = {
        "Ocp-Apim-Subscription-Key": "8e4b044422be460797579e2b59efc675",
        "Content-Type": "application/octet-stream",
      };

      const response = await fetch(urlDetect, {
        method: "POST",
        headers,
        body: typeImage === "id" ? imageId : imageFace,
      });

      if (response.ok) {
        const result = await response.json();

        if (typeImage === "id") setDataId(result);
        if (typeImage === "face") setDataFace(result);
      } else {
        setShowModal(
          <Modal
            text="Oh no! Something went wrong."
            click={onCloseModalHandler}
            icon={warning}
          />
        );
      }
    };

    handleTypeImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeImage]);

  useEffect(() => {
    const handleVerifyImage = async () => {
      if (isClickedVerify) {
        const headers = {
          "Ocp-Apim-Subscription-Key": "8e4b044422be460797579e2b59efc675",
          "Content-Type": "application/json",
        };
        const response = await fetch(urlVerify, {
          method: "POST",
          headers,
          body: JSON.stringify({
            faceId1: dataId?.data[0]?.faceId,
            faceId2: dataFace?.data[0]?.faceId,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          setShowModal(
            <Modal
              text={
                result?.data?.isIdentical
                  ? `The verification was good. ${result?.data?.confidence}.`
                  : `The verification failed. ${result?.data?.confidence}.`
              }
              click={onCloseModalHandler}
              icon={result?.data?.isIdentical ? check : fail}
            />
          );
        } else {
          setShowModal(
            <Modal
              text="Oh no! Something went wrong."
              click={onCloseModalHandler}
              icon={warning}
            />
          );
        }

        setIsClickedVerify(false);
      }
    };

    handleVerifyImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClickedVerify]);

  const convertBase64 = (file) => {
    if (file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    }
  };

  const fileSelectedHandler = async (event, type) => {
    const img = event?.target?.files[0];
    const img64 = await convertBase64(img);

    if (type === "id") {
      setImageId(img);
      setContentId(
        <img src={img64} alt="idImage" className="FaceRecognition-img" />
      );
      setIsSelectedId(true);
    } else {
      setImageFace(img);
      setContentFace(
        <img src={img64} alt="FaceImage" className="FaceRecognition-img" />
      );
      setIsSelectedFace(true);
    }
  };

  const fileUploadedHandler = async (type) => {
    setTypeImage(type);
  };

  const fileConvertedHandler = async (image) => {
    const img64 = await convertBase64(image);
    const img64Fixed = img64?.includes("data:image/png;base64,")
      ? img64?.replace("data:image/png;base64,", "")
      : img64?.replace("data:image/jpeg;base64,", "");
    setShowModal(
      <Modal text={img64Fixed} click={onCloseModalHandler} type="b64" />
    );
  };

  const onVerifyHandler = () => {
    setIsClickedVerify(true);
  };

  return (
    <div className="FaceRecognition">
      <div className="FaceRecognition-images">
        <div className="FaceRecognition-first">
          {contentId}
          <input
            type="file"
            onChange={(event) => fileSelectedHandler(event, "id")}
          />
          <div className="FaceRecognition-buttons">
            <button
              className="FaceRecognition-button-upload"
              onClick={() => fileUploadedHandler("id")}
              disabled={!isSelectedId}
            >
              {labels.upload}
            </button>
            <button
              className="FaceRecognition-button-convert"
              onClick={() => fileConvertedHandler(imageId)}
              disabled={!isSelectedId}
            >
              {labels.convert}
            </button>
          </div>
        </div>
        <div className="FaceRecognition-second">
          {contentFace}
          <input
            type="file"
            onChange={(event) => fileSelectedHandler(event, "face")}
          />
          <div className="FaceRecognition-buttons">
            <button
              className="FaceRecognition-button-upload"
              onClick={() => fileUploadedHandler("face")}
              disabled={!isSelectedFace}
            >
              {labels.upload}
            </button>
            <button
              className="FaceRecognition-button-convert"
              onClick={() => fileConvertedHandler(imageFace)}
              disabled={!isSelectedFace}
            >
              {labels.convert}
            </button>
          </div>
        </div>
      </div>
      <div className="FaceRecognition-verify">
        <button
          className="FaceRecognition-button-verify"
          onClick={onVerifyHandler}
          disabled={!dataId || !dataFace}
        >
          {labels.verify}
        </button>
      </div>
      {showModal}
    </div>
  );
};

export default FaceRecognition;
