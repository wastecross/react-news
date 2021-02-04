import React from 'react';
import './Face.css';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';

const Face = () => {
  return (
    <div className="Face">
      <div className="Face-container">
        <FaceRecognition />
      </div>
    </div>
  );
};

export default Face;
