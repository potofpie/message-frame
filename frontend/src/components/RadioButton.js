import React from 'react';
import './RadioButton.css'

export default function ActionButtons(props) {
  let onClickRadioButton = (e) => {
      props.setKeyType(e.target.id);
  }
  return (
    <div className='RadioButton-container'>
        <div className='RadioButton-object-container'>
            <button id='public' 
                    onClick={onClickRadioButton} 
                    className={'RadioButton-button'}>
                    Public
            </button>
            <button id='private' 
                    onClick={onClickRadioButton} 
                    className={'RadioButton-button'}>
                    Private
            </button>
        </div>
    </div>
  );
}