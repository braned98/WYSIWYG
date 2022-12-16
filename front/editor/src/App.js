import "./App.css";

import Editor from "./components/editor/editor";
import Navbar from "./components/UI/Navbar";
import RegistrationForm from "./components/user/RegistrationForm";
import LoginForm from "./components/user/LoginForm";
import MyDocuments from "./components/documents/MyDocuments";
import { logout } from "./services/userService";

import { useState } from "react";

import InitialDocument from "./utlis/InitialDocument";
import { useDispatch } from "react-redux";
import { userActions } from "./store/index"
import NewDocument from "./components/documents/NewDocument";

function App() {
  const dispatch = useDispatch();
  


  const [initialDocument, updateDocument] = useState(InitialDocument);

  const [registration, setRegistration] = useState(false);
  const [login, setLogin] = useState(false);
  const [editor, setEditor] = useState(true);
  const [newDocument, setNewDocument] = useState(false);
  const [myDocuments, setMyDocuments] = useState(false);

  const onLoginHandler = () => {
    setLogin(true);
    setRegistration(false);
    setEditor(false);
    setNewDocument(false);
    setMyDocuments(false);
  };

  const onRegisterHandler = () => {
    setLogin(false);
    setRegistration(true);
    setEditor(false);
    setNewDocument(false);
    setMyDocuments(false);
  };

  const onDocumentHandler = () => {
    setLogin(false);
    setRegistration(false);
    setEditor(true);
    setNewDocument(false);
    setMyDocuments(false);
  };

  const onLogoutHandler = () => {
    logout();
    dispatch(userActions.logout());
    setLogin(true);
    setRegistration(false);
    setEditor(false);
    setNewDocument(false);
    setMyDocuments(false);
  };

  const afterLoginHandler = () => {
    setLogin(false);
    setRegistration(false);
    setEditor(false);
    setNewDocument(false);
    setMyDocuments(true);
  };

  const onNewDocumentHandler = () => {
    setLogin(false);
    setRegistration(false);
    setEditor(false);
    setNewDocument(true);
    setMyDocuments(false);
  };

  const onMyDocumentsHandler = () => {
    setLogin(false);
    setRegistration(false);
    setEditor(false);
    setNewDocument(false);
    setMyDocuments(true);
  };

  return (
    <div className="main">
      <Navbar
        onLogin={onLoginHandler}
        onRegister={onRegisterHandler}
        onDocument={onDocumentHandler}
        onLogout={onLogoutHandler}
        onNewDocument={onNewDocumentHandler}
        onMyDocuments={onMyDocumentsHandler}
      ></Navbar>
      {registration && <RegistrationForm></RegistrationForm>}
      {login && <LoginForm onLogin={afterLoginHandler}></LoginForm>}
      {editor && <Editor initialDocument={initialDocument} onChange={updateDocument} />}
      {myDocuments && <MyDocuments></MyDocuments>}
      {newDocument && <NewDocument></NewDocument>}
    </div>
  );
}

export default App;
