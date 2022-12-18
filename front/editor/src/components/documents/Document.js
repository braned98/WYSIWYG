import React from "react";

import "./Document.css";

const Document = (props) => {
  return (
    <div className="document-container">
      <div className="document-card">
        <p className="doc-name">{props.name}</p>
        <button className="doc-button">Open</button>
      </div>
    </div>
  );
};

export default Document;
