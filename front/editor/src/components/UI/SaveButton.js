import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const saveHandler = (docContent, id) => {
    const documentData = {
        id: id,
        documentContent: docContent
      };
      
      console.log(documentData)
  
      const headers = {
        "Content-type": "application/json",
        Accept: "application/json",
      };
  
      axios
        .put("http://localhost:7127/saveDocument", JSON.stringify(documentData), {
          headers,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
};

const SaveButton = (props) => {
  const document = localStorage.getItem("docContent")
  const documentId = localStorage.getItem("currentDocument");

  const { icon, style } = props;

  return (
    <button
      className="toolbarButton"
      onMouseDown={(event) => {
        event.preventDefault();
        saveHandler(document, documentId);
      }}
    >
      {icon}
    </button>
  );
};

export default SaveButton;
