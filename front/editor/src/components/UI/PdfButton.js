import React from "react";
import axios from "axios";

const exportHandler = (document) => {

    const docData = {
        content: document
    };

    console.log(docData)

    const headers = {
        "Content-type": "application/json",
        "Accept": "application/json",
    }

  axios
    .post("http://localhost:5001/export", JSON.stringify(docData), {headers})
    .then((response) => {
      console.log(response.data);
    });
};

const PdfButton = (props) => {
  const document = localStorage.getItem("docContent");

  const { icon, style } = props;

  return (
    <button
      className="toolbarButton"
      onMouseDown={(event) => {
        event.preventDefault();
        exportHandler(document);
      }}
    >
      {icon}
    </button>
  );
};

export default PdfButton;
