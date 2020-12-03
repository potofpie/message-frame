import { useSpring, animated } from "react-spring";
import React from 'react';
import './RadioButton.css'




export default function ActionButtons(props) {
  const SpecialButton = (params) => {
    const style = useSpring(
      { 
        backgroundColor: props.keyType === params.id ? '#ffff80' : ' #272822',
        color: props.keyType === params.id ? 'black' : '#fff', 
        from: { 
          backgroundColor: props.keyType === params.id ? ' #272822' : '#ffff80',
          color: props.keyType === params.id ? '#fff' : 'black',
        } 
      }
    );
    return <animated.button id={params.id} className={params.className} onClick={params.onClick} style={style}>{params.children}</animated.button>;
  };

  const onClickRadioButton = (e) => {
      props.setKeyType(e.target.id);
  }
  return (

    <div className='RadioButton-container'>
    {/* <SpecialButton>eat shit</SpecialButton> */}

        <div className='RadioButton-object-container'>
            <SpecialButton id='public' 
                    onClick={onClickRadioButton} 
                    className={'RadioButton-button'}>
                    Public
            </SpecialButton>
            <SpecialButton id='private' 
                    onClick={onClickRadioButton} 
                    className={'RadioButton-button'}>
                    Private
            </SpecialButton>
        </div>
    </div>
  );
}