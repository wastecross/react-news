import React, { useState } from "react";
import exportXlsx from "../../utils/exportXlsx";
import "./Convert.css";

const Convert = () => {
  const [files, setFiles] = useState("");
  const [fileName, setFileName] = useState("");
  const [disable, setDisable] = useState(true);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e?.target?.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setFiles(e.target.result);
    };
    setDisable(false);
    setFileName(e?.target?.files[0]?.name?.replace(".json", ""));
  };

  const onClickHandler = () => {
    exportXlsx({ csvData: JSON.parse(files), fileName });
  };

  return (
    <div className="Convert">
      <div className="Convert-header">
        <input type="file" onChange={(event) => handleChange(event)} />
        <button
          className="Convert-button"
          onClick={onClickHandler}
          disabled={disable}
        >
          Convertir json to xlsx
        </button>
      </div>
    </div>
  );
};

export default Convert;
