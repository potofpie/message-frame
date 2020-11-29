import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import KeyPair from './components/KeyPair'
import CircleBoi from './components/CircleBoi'


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
   
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="App-header">
          message-frame
      </div>
        <p>
          A quick and simple way to hide encrypted messages in a image!
        </p>
        
        {/* <CircleBoi/> */}
       {/* <button> dlsjflksjdfklj </button> */}
       {keyPair === null ? <CircleBoi/> : <KeyPair keyPair={keyPair}/>}
        
        
    </div>
  );
}

export default App;
