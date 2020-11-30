// import React from 'react';
import './FileUpload.css';
import React, { useState, useEffect } from 'react';




export default function FileUpload(props) {
  
  const fileHandler = (e) => {
    props.setFile(e.target.files[0])
  }

  return (
    <div className='FileUpload-container'>
        {/* <div> upload your image here</div> */}
        <input className='FileUpload-link' type="file" id="input" multiple onChange={fileHandler}></input>
        <img className='FileUpload-preview' src={props.file? URL.createObjectURL(props.file) : null} alt={props.file? props.file.name : null}/>
    </div>
  );
}