import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { Modal } from '@material-ui/core';

import config from './config';
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
  const [notificationLink, setNotificationLink ]  = useState(null);
  let notificationTimeout;
  
  const createNotificationWithLink = (text,link) => {
    if(notificationTimeout){
      clearTimeout(notificationTimeout);
    }
    setNotificationText(text);
    setNotificationLink(link)
    setTimeout(() => {
      setNotificationLink(null);
      setNotificationText(null);
      }, 8000);
  }

  const createNotificationText = (text) => {
    if(notificationTimeout){
      clearTimeout(notificationTimeout);
    }
    setNotificationLink(null);
    setNotificationText(text);
    setTimeout(() => {setNotificationText(null)}, 8000);
  }

  const startingNotification = () => { createNotificationWithLink(
    'To generate custom keys follow the instructions ',
    'https://github.com/potofpie/message-frame/blob/main/doc/generating_keys.md'
  )}

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  const encrypt = () => {
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
      axios.post(config.host+`/api/imageEncryption/encrypt`, formData, {
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
      createNotificationText(`Please select a ${requestItemsError}!`);
    }
  }

  const decrypt = () => {
    console.log({ key : keyPair[keyType],
                  keyType,
                  image
                });
    if(image && keyType && keyPair ){

      var formData = new FormData();
      formData.append('key', keyPair[keyType]);
      formData.append('keyType', keyType);
      formData.append('image', image);

      axios.post(config.host+`/api/imageEncryption/decrypt`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        const data = res.data.body;
        setResponseMessage(data)
        console.log(data)
        createNotificationText(`Your message was ${data}`)
      })
    } else {
      let requestItems = {image, keyType, keyPair}
      let requestItemsError = Object.keys(requestItems).filter((k) => !requestItems[k])
      createNotificationText(`Please select a ${requestItemsError}!`);
    }
  }
  
  

  useEffect(() => {
      startingNotification()
      axios.get(config.host+`/api/imageEncryption/createKeyPair`)
        .then(res => {
          const data = res.data;
          keyPair === null ? setKeyPair(data['body']) : console.log('something');
        })
  },[]);
  
  return (
    
    <div className="App">
      <NotificationBox  notificationLink={notificationLink} setNotificationText={setNotificationText} notificationText={notificationText}> you might be gay</NotificationBox>
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
              <KeyPair createNotificationText={createNotificationText} createNotificationWithLink={createNotificationWithLink} screenWidth={width} keyType={keyType} keyPair={keyPair} setKeyPair={setKeyPair}/>
              <FileUpload setImage={setImage} image={image} />
              <ActionButtons text={keyType === 'public' ?  'Encrypt' : 'Decrypt'} action={keyType === 'public' ?  encrypt : decrypt} />
            </>
        }
      </div>
      <ModalWindow setOpen={setResponseImage} open={responseImage}>
        <img alt='the_string' className='poopdick' src={responseImage}/>
      </ModalWindow>
      <div className="App-footer">
          <p><a href='https://potofpie.github.io/BobbyChristopher/'>Portfolio</a> | <a href='https://www.linkedin.com/in/bobbychristopher/'>LinkedIn</a> | <a href='https://github.com/potofpie'>GitHub</a></p>
      </div>
    </div>
  );
}

export default App;