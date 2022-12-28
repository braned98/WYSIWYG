import React from "react";
import axios from "axios";

const exportHandler = (document) => {
  const docData = {
    content: document,
  };

  axios
    .post("http://localhost:5001/export", JSON.stringify(docData), {
      responseType: "blob",
      headers: { "Content-type": "application/json" },
    })
    .then((response) => {
      var url = window.URL.createObjectURL(new Blob([response.data]));
      var a = window.document.createElement('a');
      a.href = url;
      a.download = 'document.pdf';
      a.click();
      a.remove();
      setTimeout(() => window.URL.revokeObjectURL(url), 100);
    });
};

const PdfButton = (props) => {
  const document = localStorage.getItem("docContent");

  const { icon } = props;

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
