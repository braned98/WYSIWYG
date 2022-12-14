import React from "react";
import { useDispatch} from "react-redux";
import { routerActions } from "../../store";
import "./Document.css";

const Document = (props) => {
    const dispatch = useDispatch();

  const openDocumentHandler = () => {
    localStorage.setItem('currentDocument', props.id);
    localStorage.setItem('docContent', props.content);
    localStorage.setItem('currentVersion', props.version);
    localStorage.setItem('maxVersion', props.version)
    dispatch(routerActions.updateRoute('Document'));
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
