import styled from 'styled-components';

export const AppContainer = styled.div.attrs( {
   className:"flex flex-1 justify-evenly items-center flex-col  "
})``

export const TitleSection = styled.div.attrs( {
  className: "flex h-1/6  justify-end items-center flex-col "
})``

export const ActionSection = styled.div.attrs( {
  className: "flex h-5/6 justify-evenly items-center flex-col w-full"
})``

export const Loading = styled.span.attrs( {
  className: "animate-ping inline-flex h-16 w-16 rounded-full bg-yellow opacity-75"
})``

export const Title = styled.div.attrs( {
  className: "text-yellow text-4xl"
})``
export const Description = styled.div.attrs( {
  className: "text-white text-sm"
})``


export const MessageField = styled.input.attrs( {
  className: "text-white text-sm border-2 border-yellow bg-green p-1 rounded w-9/12	text-center"
})``


export const LeftButton = styled.button.attrs( {
  className: "text-white text-sm active:bg-yellow active:text-green border-2 border-yellow bg-green p-2 rounded-l w-9/12 text-center"
})``
export const RightButton = styled.button.attrs( {
  className: "text-white active:bg-yellow active:text-green  text-sm border-2 border-yellow bg-green p-2 rounded-r w-9/12 text-center"
})``


export const Button = styled.button.attrs( {
  className: "text-white active:bg-yellow active:text-green  text-sm border-2 border-yellow bg-green p-2  w-20 text-center"
})``

export const KeysContainer = styled.button.attrs( {
  className: "flex justify-around items center w-3/4 overflow-hidden"
})``
