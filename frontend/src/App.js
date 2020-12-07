import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Modal } from '@material-ui/core';


import KeyPair from './components/KeyPair';
import CircleBoi from './components/CircleBoi';
import ActionButtons from './components/ActionButtons';
import FileUpload from './components/FileUpload';
import MessageBox from './components/MessageBox';
import RadioButton from './components/RadioButton';
import NotificationBox from './components/NotificationBox';
import ModalWindow from './components/ModalWindow';
import SecretFile from './resources/envelope.png';



function App() {
  // request variable
  const [keyType, setKeyType]  = useState('public');
  const [keyPair, setKeyPair] = useState(null);
  const [message, setMessage]  = useState(null);
  const [image, setImage]  = useState(null);

  // response variable 
  const [responseImage, setResponseImage]  = useState(null);
  const [responseMessage, setResponseMessage]  = useState(null);
  
  // variable browser
  const [width, setWidth ]  = useState(window.innerWidth);
  const [notificationText, setNotificationText ]  = useState(null);
  
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  let encrypt = () => {
    console.log({ key : keyPair[keyType],
                  keyType,
                  image,
                  message
                });
    if(image && keyType && message && keyPair ){
      var formData = new FormData();
      formData.append('string', message);
      formData.append('key', keyPair[keyType]);
      formData.append('keyType', keyType);
      formData.append('image', image);
      
      axios.post(`http://localhost:5000/api/imageEncryption/encrypt`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        const data = res.data;
        console.log(res)
        console.log(data)
        setResponseImage(data);
      })
    } else {
      let requestItems = {image, keyType, keyPair, message}
      const requestItemsError = Object.keys(requestItems).filter((k) => !requestItems[k])
      setNotificationText(`Please select a ${requestItemsError}!`);
    }
  }

  let decrypt = () => {
    console.log({ key : keyPair[keyType],
                  keyType,
                  image
                });
    if(image && keyType && keyPair ){

      var formData = new FormData();
      formData.append('key', keyPair[keyType]);
      formData.append('keyType', keyType);
      formData.append('image', image);

      axios.post(`http://localhost:5000/api/imageEncryption/decrypt`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        const data = res.data.body;
        setResponseMessage(data)
        console.log(data)
        setNotificationText(`Your message was ${data}`)
      })
    } else {
      let requestItems = {image, keyType, keyPair}
      let requestItemsError = Object.keys(requestItems).filter((k) => !requestItems[k])
      setNotificationText(`Please select a ${requestItemsError}!`);
    }
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
      <NotificationBox  setNotificationText={setNotificationText} notificationText={notificationText}> you might be gay</NotificationBox>
      <div className="App-header">
          <img src={SecretFile} className="App-logo" alt="logo" />
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
              <FileUpload setImage={setImage} image={image} />
              <ActionButtons encrypt={keyType === 'public' ?  encrypt : decrypt} />
            </>
        }
      </div>
      <ModalWindow setOpen={setResponseImage} open={responseImage}
        ><img src={responseImage}/>
      </ModalWindow>
      <div className="App-footer">
          <p><a href='https://potofpie.github.io/BobbyChristopher/'>Portfolio</a> | <a href='https://www.linkedin.com/in/bobbychristopher/'>LinkedIn</a> | <a href='https://github.com/potofpie'>GitHub</a></p>
      </div>
    </div>
  );
}

export default App;