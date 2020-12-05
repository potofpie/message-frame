import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


import KeyPair from './components/KeyPair';
import CircleBoi from './components/CircleBoi';
import ActionButtons from './components/ActionButtons';
import FileUpload from './components/FileUpload';
import MessageBox from './components/MessageBox';
import RadioButton from './components/RadioButton';
// import SecretFile from './resources/secret-file.png';



function App() {
  const [keyPair, setKeyPair] = useState(null);
  const [file, setFile]  = useState(null);
  const [message, setMessage]  = useState(null);
  const [newImage, setNewImage]  = useState(null);
  const [width, setWidth ]  = useState(window.innerWidth);
  const [keyType, setKeyType]  = useState('public');


  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  let encrypt = () => {
    var formData = new FormData();
    formData.append('string', message);
    formData.append('private', keyPair['private']);
    formData.append('public', keyPair['public']);
    // formData.append('image', newImage);
    // formData.append('messageImage', newImage);
    axios.post(`http://localhost:5000/api/imageEncryption/createMessageImage`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      const data = res.data;
      setNewImage(data)
    })
  }

  let testingTheValues = () => {
    console.log({keyPair,file,message})
  }
  
  

  useEffect(() => {
      axios.get(`http://localhost:5000/api/imageEncryption/createKeyPair`)
        .then(res => {
          const data = res.data;
          keyPair === null ? setKeyPair(data['body']) : console.log('something');
        })
  },[]);
  
  return (
    <div className="App">
      <div className="App-header">
          {/* <img src={SecretFile} className="App-logo" alt="logo" /> */}
          <div>message-frame</div>
          <p>
            A quick and simple way to hide encrypted messages in a image.
          </p>
      </div>
      <div className='App-body'>
        {
        keyPair === null ? 
          <CircleBoi /> 
          : 
          <> 
            <RadioButton keyType={keyType} setKeyType={setKeyType}/>
            <MessageBox setMessage={setMessage}/>
            <KeyPair screenWidth={width} keyType={keyType} keyPair={keyPair}/>
            <FileUpload setFile={setFile} file={file} />
            <ActionButtons encrypt={keyType === 'public' ?  encrypt : testingTheValues} />
          </>
        }
      </div>
      {/* <img src={newImage}/> */}
    </div>
  );
}

export default App;
