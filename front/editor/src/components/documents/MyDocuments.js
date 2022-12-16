import React from "react";
import Document from "./Document";

import "./MyDocuments.css";

const MyDocuments = () => {
  return (
    <div className="wrapper">
      <div className="documents-list">
        <h1>My Documents</h1>
        <Document></Document>
        <Document></Document>
        <Document></Document>
      </div>
    </div>
  );
};

export default MyDocuments;
