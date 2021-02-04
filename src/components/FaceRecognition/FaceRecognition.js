import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FaceRecognition.css';
import { url } from '../../fixtures/face.fixture';

const FaceRecognition = () => {
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [selectedFileFace, setSelectedFileFace] = useState(null);
  const [dataId, setDataId] = useState(null);
  const [dataFace, setDataFace] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [imageFace, setImageFace] = useState(null);
  const [contentId, setContentId] = useState(<span />);
  const [contentFace, setContentFace] = useState(<span />);
  const [typeImage, setTypeImage] = useState(null);

  useEffect(() => {
    const headers = {
      'Ocp-Apim-Subscription-Key': '8e4b044422be460797579e2b59efc675',
      'Content-Type': 'application/octet-stream',
    };

    switch (typeImage) {
      case 'id':
        axios.post(url, imageId, { headers }).then((response) => {
          setDataId(response);
        });
        break;
      case 'type':
        axios.post(url, imageFace, { headers }).then((response) => {
          setDataFace(response);
        });
        break;
      default:
        break;
    }
  }, [typeImage, imageId, imageFace, setDataFace, setDataId]);

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
      setSelectedFileId(img);
      setImageId(img64);
      setContentId(
        <img src={img64} alt='idImage' style={{ maxWidth: '25rem' }} />
      );
    } else {
      setSelectedFileFace(img);
      setImageFace(img64);
      setContentFace(
        <img src={img64} alt='FaceImage' style={{ maxWidth: '25rem' }} />
      );
    }
  };

  const fileUploadedHandler = async (type) => {
    if (type === 'id') {
      setTypeImage(type);
    } else {
      setTypeImage(type);
    }
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
          <button
            className="FaceRecognition-button-upload"
            onClick={() => fileUploadedHandler("id")}
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
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
