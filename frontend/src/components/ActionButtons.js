import React from 'react';
import './ActionButtons.css'

export default function ActionButtons(props) {
  return (
    <div className='ActionButtons-container'>
      <button onClick={props.encrypt} className='ActionButtons-button'><span>Generate</span></button>
      {/* <button className='ActionButtons-button'> <span> Decrypt</span> </button> */}
    </div>
  );
}