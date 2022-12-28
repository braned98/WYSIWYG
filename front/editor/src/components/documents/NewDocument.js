import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import axios from "axios";
import { useDispatch } from "react-redux";
import { routerActions } from "../../store";

import "./NewDocument.css";

const NewDocument = () => {
  const dispatch = useDispatch();

  const[errorMessage, setErrorMessage] = useState();
  const [createFailed, setCreateFailed] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const documentData = {
      name: enteredName,
      userId: localStorage.getItem("userId"),
    };

    const headers = {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    axios
      .post("http://localhost:7127/createdoc", JSON.stringify(documentData), {
        headers,
      })
      .then((res) => {
        console.log(res);
        dispatch(routerActions.updateRoute("My Documents"));
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrorMessage(err.response.data);
        setCreateFailed(true);
    });
  };

  const nameInputClasses = nameInputHasError
    ? "form-control error"
    : "form-control";

  return (
    <div className="document-container">
      <div className="document-form">
        <form id="form" className="form" onSubmit={formSubmissionHandler}>
          <h2>Create new document</h2>
          <div className={nameInputClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
              placeholder="Enter name"
            />
            {nameInputHasError && <small>Name is empty.</small>}
          </div>
          <button type="submit" disabled={!formIsValid}>
            Create Document
          </button>
          {createFailed && <small className="create-failed">{errorMessage}</small>}
        </form>
      </div>
    </div>
  );
};

export default NewDocument;
