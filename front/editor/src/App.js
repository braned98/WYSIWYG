import "./App.css";

import Editor from "./components/editor/editor";
import Navbar from "./components/UI/Navbar";
import RegistrationForm from "./components/user/RegistrationForm";
import LoginForm from "./components/user/LoginForm";
import MyDocuments from "./components/documents/MyDocuments";
import { logout } from "./services/userService";

import { useEffect, useState } from "react";

import InitialDocument from "./utlis/InitialDocument";
import { useDispatch, useSelector } from "react-redux";
import { userActions, routerActions, documentActions } from "./store/index";
import NewDocument from "./components/documents/NewDocument";

function App() {
  const dispatch = useDispatch();

  const route = useSelector((state) => state.router.route);

  const [initialDocument, updateDocument] = useState(InitialDocument);

  const [registration, setRegistration] = useState(false);
  const [login, setLogin] = useState(false);
  const [editor, setEditor] = useState(true);
  const [newDocument, setNewDocument] = useState(false);
  const [myDocuments, setMyDocuments] = useState(false);

  useEffect(() => {
  
    console.log("Render " + route);

    switch (route) {
      case "Login":
        onLoginHandler();
        break;
      case "Register":
        onRegisterHandler();
        break;
      case "My Documents":
        onMyDocumentsHandler();
        break;
      case "New Document":
        onNewDocumentHandler();
        break;
      case "Document":
        onDocumentHandler();
        break;
      default:
        onLoginHandler();
    }
  });

  

  const onLoginHandler = () => {
    setLogin(true);
    setRegistration(false);
    setEditor(false);
    setNewDocument(false);
    setMyDocuments(false);
    dispatch(routerActions.updateRoute("Login"));
  };

  const onRegisterHandler = () => {
    setLogin(false);
    setRegistration(true);
    setEditor(false);
    setNewDocument(false);
    setMyDocuments(false);
    dispatch(routerActions.updateRoute("Register"));
  };

  const onDocumentHandler = () => {
    setLogin(false);
    setRegistration(false);
    setEditor(true);
    setNewDocument(false);
    setMyDocuments(false);
    dispatch(routerActions.updateRoute("Document"));
  };

  const onLogoutHandler = () => {
    logout();
    dispatch(userActions.logout());
    dispatch(documentActions.setId(null))
    setLogin(true);
    setRegistration(false);
    setEditor(false);
    setNewDocument(false);
    setMyDocuments(false);
    dispatch(routerActions.updateRoute("Login"));
  };

  const onNewDocumentHandler = () => {
    setLogin(false);
    setRegistration(false);
    setEditor(false);
    setNewDocument(true);
    setMyDocuments(false);
    dispatch(routerActions.updateRoute("New Document"));
  };

  const onMyDocumentsHandler = () => {
    console.log("pozvan");
    setLogin(false);
    setRegistration(false);
    setEditor(false);
    setNewDocument(false);
    setMyDocuments(true);
    dispatch(routerActions.updateRoute("My Documents"));
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
      {login && <LoginForm></LoginForm>}
      {editor && (
        <Editor initialDocument={initialDocument} onChange={updateDocument} />
      )}
      {myDocuments && <MyDocuments></MyDocuments>}
      {newDocument && <NewDocument></NewDocument>}
    </div>
  );
}

export default App;
