import React from 'react';
import './ActionButtons.css'

export default function ActionButtons() {
  return (
    <div className='ActionButtons-container'>
      <button className='ActionButtons-button'>Encrypt</button>
      <button className='ActionButtons-button'>Decrypt</button>
    </div>
  );
}