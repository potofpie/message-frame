import { FC, useRef } from 'react'
import styled from 'styled-components';


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
  className: "text-white text-sm border-2 border-yellow bg-green p-1	text-center"
})``

export const App:FC = () => {

  const hiddenFileInput = useRef<any>(null);
  
  const handleClick = (event: any) => {
    hiddenFileInput?.current?.click()
    console.log(hiddenFileInput?.current?.fileUpload)
    

  };

  return (
    <div className="flex flex-1 justify-center items-center flex-col ">
      

      
      <Title  > 
        message-frame
      </Title>
      <Description  > 
        A quick and simple way to hide encrypted messages in a image.
      </Description>

      <MessageField placeholder='enter a message here' />
      <Button  onClick={handleClick}>
        Upload a file
      </Button>
      {console.log(hiddenFileInput)}
      <input type="file"
             ref={hiddenFileInput}
             style={{display:'none'}} 
      /> 
      
</div>


  );
}

