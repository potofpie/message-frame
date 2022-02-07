import { FC } from 'react'
import { FileUploader, EncryptionKeys } from './components'
import {
  AppContainer,
  TitleSection,
  Title,
  Description,
  ActionSection,
  Loading,
  LeftButton,
  RightButton,
  MessageField
} from './core'





export const App:FC = () => {
  // const [image, setImage] = useState<any>()
  


  return (
    <AppContainer>
      {process.env.REACT_APP_API_URL }
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
            <LeftButton> Decrypt</LeftButton>
            <RightButton> Encrypt</RightButton>
          </div>
          <MessageField placeholder='Enter your secret message here!' />
          <EncryptionKeys  keyPair={{}} keyType={'private'} screenWidth={1000}  />
          <FileUploader/>
        </>
        } 
      </ActionSection>
    </AppContainer>


  );
}

