import './App.css';

import Editor from './components/editor/editor';
import Navbar from './components/UI/Navbar';

import { useState } from 'react';

import InitialDocument from './utlis/InitialDocument';



function App() {

  const [document, updateDocument] = useState(InitialDocument);

  return (
    <div className='main'>
      <Navbar></Navbar>
      <Editor document={document} onChange={updateDocument} />
    </div>
  );
}

export default App;
