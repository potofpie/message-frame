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
  KeysContainer
} from './core'




export const App:FC = () => {
  const [mode, setMode] = useState< "encrypt"| "decrypt" >( 'encrypt')

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
          <MessageField placeholder='Enter your secret message here!' />
          <KeysContainer>
            <EncryptionKey keyObject={{
              type: "public", 
              text: "text"
            }}
            selected={mode === 'decrypt'}
            />
            <EncryptionKey keyObject={{
              type: "private", 
              text: "text"
            }}
            selected={mode === 'encrypt'}
            />
          </KeysContainer>
          <FileUploader/>
        </>
        } 
      </ActionSection>
    </AppContainer>


  );
}

