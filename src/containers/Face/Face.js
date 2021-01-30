import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Face.css";
import FaceRecognition from "../../components/FaceRecognition/FaceRecognition";

const Face = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2020-09-15&to=2020-10-15&sortBy=popularity&apiKey=d6736e08a3ac4859aeda69469b97d4cc"
      )
      .then((response) => {
        setData(response);
      });
  }, [setData]);

  return (
    <div className="Face">
      <div className="Face-container">
        <FaceRecognition />
      </div>
    </div>
  );
};

export default Face;
