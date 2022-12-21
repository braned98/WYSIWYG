import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch} from "react-redux";
import { documentActions, routerActions } from "../../store";
import "./Document.css";
import InitialDocument from "../../utlis/InitialDocument";

const Document = (props) => {
    const dispatch = useDispatch();

  const openDocumentHandler = () => {
    axios
      .get("https://localhost:7127/getDocument?id=" + `${props.id}`)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('currentDocument', props.id);
        if(response.data.latestContent === ""){
            dispatch(documentActions.updateContent(InitialDocument))
        }else{
            dispatch(documentActions.updateContent(response.data.latestContent));
        }
        dispatch(documentActions.setId(response.data.id));
        dispatch(documentActions.updateStatus());
      });
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
