import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


import KeyPair from './components/KeyPair';
import CircleBoi from './components/CircleBoi';
import ActionButtons from './components/ActionButtons';
import FileUpload from './components/FileUpload';
import SecretFile from './resources/secret-file.png';



function App() {
  const [keyPair, setKeyPair] = useState(null);

  useEffect(() => {
      axios.get(`http://localhost:5000/api/imageEncryption/createKeyPair`)
        .then(res => {
          const data = res.data;
          console.log(data);
          keyPair === null ? setKeyPair(data['body']) : console.log('something');
        })
  });
  
  return (
    <div className="App">
      <div className="App-header">
          <img src={SecretFile} className="App-logo" alt="logo" />
          <div>message-frame</div>
          <p>
            A quick and simple way to hide encrypted messages in a image!
          </p>
      </div>
      <div className='App-body'>
        {keyPair === null ? <CircleBoi/> : <KeyPair keyPair={keyPair}/>}

        <FileUpload/>
        <ActionButtons/>
        
      </div>
    </div>
  );
}

export default App;
