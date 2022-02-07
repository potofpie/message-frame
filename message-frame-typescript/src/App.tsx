import { FC, useRef, useState } from 'react'
import styled from 'styled-components';
import { FileUploader } from './FileUploader'

import { KeyPair } from './KeyPair'
 

const AppContainer = styled.div.attrs( {
  className: "flex flex-1 justify-evenly items-center flex-col  "
})``

const TitleSection = styled.div.attrs( {
  className: "flex h-1/6  justify-end items-center flex-col "
})``

const ActionSection = styled.div.attrs( {
  className: "flex h-5/6 justify-evenly items-center flex-col "
})``

const Loading = styled.span.attrs( {
  className: "animate-ping inline-flex h-16 w-16 rounded-full bg-yellow opacity-75"
})``

const Title = styled.div.attrs( {
  className: "text-yellow text-3xl"
})``
const Description = styled.div.attrs( {
  className: "text-white text-sm "
})``


const MessageField = styled.input.attrs( {
  className: "text-white text-sm border-2 border-yellow bg-green p-1 rounded w-9/12	text-center"
})``


const Button = styled.button.attrs( {
  className: "text-white text-sm border-2 border-yellow bg-green p-1 rounded w-9/12	text-center"
})``



export const App:FC = () => {
  const [image, setImage] = useState<any>()
  


  return (
    <AppContainer>
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
            <Button> Decrypt</Button>
            <Button> Encrypt</Button>
          </div>
          <MessageField placeholder='enter a message here' />
          <KeyPair  keyPair={{}} keyType={'private'} screenWidth={1000}  />
          <FileUploader/>
        </>} 
      </ActionSection>
    </AppContainer>


  );
}

