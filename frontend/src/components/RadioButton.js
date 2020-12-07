import { useSpring, animated } from "react-spring";
import React from 'react';
import './RadioButton.css'




export default function ActionButtons(props) {
  const SpecialButton = (params) => {
    const style = useSpring({
      backgroundColor: props.keyType === params.id ?  '#ffff80' : '#272822',
      color: props.keyType === params.id ?  'black' : '#fff'
  })
    return <animated.button id={params.id} 
                            className={params.className} 
                            onClick={params.onClick}  
                            style={style}
                            >
                            {params.children}
            </animated.button>;
  };

  const onClickRadioButton = (e) => {
      props.setKeyType(e.target.id);
  }
  return (

    <div className='RadioButton-container'>
        <div className='RadioButton-object-container'>
            <SpecialButton id='public' 
                    onClick={onClickRadioButton} 
                    className={'RadioButton-button'}>
                    Encrypt
            </SpecialButton>
            <SpecialButton id='private' 
                    onClick={onClickRadioButton} 
                    className={'RadioButton-button'}>
                    Decrypt
            </SpecialButton>
        </div>
    </div>
  );
}