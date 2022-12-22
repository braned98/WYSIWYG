import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch} from "react-redux";
import { documentActions, routerActions } from "../../store";
import "./Document.css";
import InitialDocument from "../../utlis/InitialDocument";

const Document = (props) => {
    const dispatch = useDispatch();

  const openDocumentHandler = () => {
    localStorage.setItem('currentDocument', props.id);
    localStorage.setItem('docContent', props.content);
    dispatch(routerActions.updateRoute('Document'));
    //dispatch(documentActions.updateContent(props.content));
  };

  return (
    <div className="document-container">
      <div className="document-card">
        <p className="doc-name">{props.name}</p>
        <button className="doc-button" onClick={openDocumentHandler}>
          Open
        </button>
      </div>
    </div>
  );
};

export default Document;
