import React from "react";
import useInput from "../../hooks/use-input";

import "./NewDocument.css";

const NewDocument = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetnameInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  const formSubmissionHandler = () => {};

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
        </form>
      </div>
    </div>
  );
};

export default NewDocument;
