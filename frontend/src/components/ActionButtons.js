import React from 'react';
import './ActionButtons.css'

export default function ActionButtons(props) {
  return (
    <div className='ActionButtons-container'>
      <button onClick={props.encrypt} className='ActionButtons-button'>Encrypt</button>
      <button className='ActionButtons-button'>Decrypt</button>
    </div>
  );
}