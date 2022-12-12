import './App.css';

import Editor from './components/editor/editor';
import Navbar from './components/UI/Navbar';



function App() {



  return (
    <div className='main'>
      <Navbar></Navbar>
      <Editor />
    </div>
  );
}

export default App;
