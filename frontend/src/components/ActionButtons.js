import React from 'react';
import './ActionButtons.css'

export default function ActionButtons(props) {
  return (
    <div className='ActionButtons-container'>
      <button onClick={props.action} className='ActionButtons-button'><span>Go!</span></button>

    </div>
  );
}