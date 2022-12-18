import React, { useEffect, useState } from "react";
import Document from "./Document";
import axios from "axios";

import "./MyDocuments.css";

const MyDocuments = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    axios
      .get("https://localhost:7127/getDocuments?id=" + `${id}`)
      .then((response) => {
        console.log(response.data);
        setDocuments(response.data);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="documents-list">
        <h1>My Documents</h1>
        {documents.map((document) => (
          <Document id={document.id} name={document.name} />
        ))}
      </div>
    </div>
  );
};

export default MyDocuments;
