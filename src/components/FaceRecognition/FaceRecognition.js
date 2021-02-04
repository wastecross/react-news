import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FaceRecognition.css';
import { urlDetect, urlVerify } from '../../fixtures/face.fixture';

const FaceRecognition = () => {
  const [dataId, setDataId] = useState(null);
  const [dataFace, setDataFace] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [imageFace, setImageFace] = useState(null);
  const [contentId, setContentId] = useState(<span />);
  const [contentFace, setContentFace] = useState(<span />);
  const [isClickedId, setIsClickedId] = useState(false);
  const [isClickedFace, setIsClickedFace] = useState(false);
  const [isSelectedId, setIsSelectedId] = useState(false);
  const [isSelectedFace, setIsSelectedFace] = useState(false);
  const [typeImage, setTypeImage] = useState(null);
  const [isClickedVerify, setIsClickedVerify] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const headers = {
      'Ocp-Apim-Subscription-Key': '8e4b044422be460797579e2b59efc675',
      'Content-Type': 'application/octet-stream',
    };

    const headersVerify = {
      'Ocp-Apim-Subscription-Key': '8e4b044422be460797579e2b59efc675',
      'Content-Type': 'application/json',
    };

    switch (typeImage) {
      case 'id':
        axios.post(urlDetect, imageId, { headers }).then((response) => {
          setDataId(response);
        });
        break;
      case 'face':
        axios.post(urlDetect, imageFace, { headers }).then((response) => {
          setDataFace(response);
        });
        break;
      default:
        break;
    }

    if (isClickedVerify) {
      const req = JSON.stringify({
        faceId1: dataId?.data[0]?.faceId,
        faceId2: dataFace?.data[0]?.faceId,
      });

      axios.post(urlVerify, req, { headersVerify }).then((response) => {
        setResults(response);
      });
      setIsClickedVerify(false);
    }
  }, [typeImage, isClickedVerify]);

  const convertBase64 = (file) => {
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
  };

  const fileSelectedHandler = async (event, type) => {
    const img = event?.target?.files[0];
    const img64 = await convertBase64(img);

    if (type === 'id') {
      setImageId(img);
      setContentId(
        <img src={img64} alt='idImage' className='FaceRecognition-img' />
      );
      setIsSelectedId(true);
    } else {
      setImageFace(img);
      setContentFace(
        <img src={img64} alt='FaceImage' className='FaceRecognition-img' />
      );
      setIsSelectedFace(true);
    }
  };

  const fileUploadedHandler = async (type) => {
    if (type === 'id') {
      setTypeImage(type);
      setIsClickedId(true);
    } else {
      setTypeImage(type);
      setIsClickedFace(true);
    }
  };

  const onVerifyHandler = () => {
    setIsClickedVerify(true);
  };

  console.log(results);

  return (
    <div className="FaceRecognition">
      <div className="FaceRecognition-images">
        <div className="FaceRecognition-first">
          {contentId}
          <input
            type="file"
            onChange={(event) => fileSelectedHandler(event, "id")}
          />
          <button
            className="FaceRecognition-button-upload"
            onClick={() => fileUploadedHandler("id")}
            disabled={!isSelectedId}
          >
            Upload
          </button>
        </div>
        <div className="FaceRecognition-second">
          {contentFace}
          <input
            type="file"
            onChange={(event) => fileSelectedHandler(event, "face")}
          />
          <button
            className="FaceRecognition-button-upload"
            onClick={() => fileUploadedHandler("face")}
            disabled={!isSelectedFace}
          >
            Upload
          </button>
        </div>
      </div>
      <div className="FaceRecognition-verify">
        <button
          className="FaceRecognition-button-verify"
          onClick={onVerifyHandler}
          disabled={!isClickedFace || !isClickedId}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default FaceRecognition;
