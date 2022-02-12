import React, { useEffect } from 'react'
import { FC, useState } from 'react'
import { FileUploader, Key, EncryptionKey } from './components'
import {
  AppContainer,
  TitleSection,
  Title,
  Description,
  ActionSection,
  Loading,
  LeftButton,
  RightButton,
  MessageField,
  KeysContainer,
  Button
} from './core'




export const App:FC = () => {
  const [mode, setMode] = useState< "encrypt"| "decrypt" >( 'encrypt')
  const [message, setMessage] = useState<string>()
  const [keys, setKeys] = useState<Key[]>( [{text: "", type: "public" }, {text: "", type: "private"} ])



  useEffect(()=> {

    (async () => {
      const response = await fetch('https://loripsum.net/api')
      const text = await response.text()
      setKeys( [{text, type: "public" }, {text, type: "private"} ] )

    })()

  },[])

  return (
    <AppContainer>
      {/* {process.env.REACT_APP_API_URL } */}
      <TitleSection>
        <Title > 
          message-frame
        </Title>
        <Description  > 
          A quick and simple way to hide encrypted messages in a image.
        </Description>
      </TitleSection>
      <ActionSection> 
        {false ? 
          <Loading/>
        : 
        <>
          <div className='flex flex-row'>
            <LeftButton 
              onClick={() => setMode('decrypt')}
              style={ mode === "decrypt" ? { "background": "#ffff80", color: '#272822' } : { "background": '#272822'}} 
            > 
            Decrypt
            </LeftButton>
            <RightButton 
              onClick={() => setMode('encrypt')}
              style={ mode === "encrypt" ? { "background": "#ffff80",  color: '#272822' } : { "background": '#272822'}} 
             > 
             Encrypt
             </RightButton>
          </div>
          <MessageField 
            placeholder='Enter your secret message here!' 
            onChange={(event: any ) => 
              setMessage(event.target.value) 
            } 
            value={message}
          />
          <KeysContainer>
            <EncryptionKey keyObject={keys[0]}
            selected={mode === 'decrypt'}
            // onChange={(v: string, e: any) => setKeys( (prevKeys: any) => {
              
            // })
            // }
            />
            <EncryptionKey 
            keyObject={keys[1]}
            selected={mode === 'encrypt'}
            onChange={(v: string, e: any) => console.log(v)}
            />
          </KeysContainer>
          <FileUploader/>
        </>
        } 
      <Button> Go! </Button >
      </ActionSection>
    </AppContainer>


  );
}

