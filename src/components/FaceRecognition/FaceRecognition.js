import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FaceRecognition.css';
import { url } from '../../fixtures/face.fixture';

const FaceRecognition = () => {
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [selectedFileFace, setSelectedFileFace] = useState(null);
  const [data, setData] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [typeImage, setTypeImage] = useState(null);

  useEffect(() => {
    const headers = {
      'Ocp-Apim-Subscription-Key': '8e4b044422be460797579e2b59efc675',
      'Content-Type': 'application/octet-stream',
    };

    switch (typeImage) {
      case 'id':
        axios.post(url, imageId, { headers }).then((response) => {
          setData({ id: response, face: '' });
        });
        break;
      default:
        break;
    }
  }, [typeImage, imageId, setData]);

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

  const fileSelectedHandler = (event, type) => {
    if (type === 'id') {
      setSelectedFileId(event.target.files[0]);
      setTypeImage(type);
    } else {
      setSelectedFileFace(event.target.files[0]);
    }
  };

  const fileUploadedHandler = async (type) => {
    if (type === 'id') {
      setImageId(await convertBase64(selectedFileId));
    } else {
      await convertBase64(selectedFileFace);
    }
  };

  console.log(data);

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
            onClick={() => fileUploadedHandler("id")}
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
