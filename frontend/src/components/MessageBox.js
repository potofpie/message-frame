import React from 'react';
import './MessageBox.css'




export default function MessageBox(props) {

  let updateValue = (e) => {
    console.log(e.target.value)
    props.setMessage(e.target.value);
  }
  return (
    <div className='MessageBox-container'>
      <input className='MessageBox-input' onChange={updateValue} placeholder='enter a secret message' type='text'/>
    </div>
  );
}