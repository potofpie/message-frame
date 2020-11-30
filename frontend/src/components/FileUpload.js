import React from 'react';
import './FileUpload.css';


function clickAThing() {
  this.refs.fileUploader.click();
}

export default function FileUpload() {
  return (
    <div className='FileUpload-container'>
        {/* <div> upload your image here</div> */}
        <input className='FileUpload-link' type="file" id="input" multiple></input>
    </div>
  );
}