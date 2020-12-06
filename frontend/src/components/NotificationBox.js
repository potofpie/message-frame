import { useSpring, animated } from "react-spring";
import CancelIcon from '@material-ui/icons/Cancel';
import { IconButton } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React from 'react';
import './NotificationBox.css'




export default function NotificationBox(props) {
  const resetText = () => {
    props.setNotificationText(null)
  }
  const style = useSpring({opacity: props.notificationText ? 1 : 0})
  return (
     
    <div className='NotificationBox-container'>
        <animated.div style={style} className='NotificationBox-object-container'> 
          <div className='NotificationBox-object-container-left'></div>
          <div className='NotificationBox-object-container-center'>{props.notificationText}</div>
          <div className='NotificationBox-object-container-right'>
            <IconButton aria-label="delete"  size="small">
              <CancelIcon onClick={resetText} color='primary' fontSize="inherit"  style={{ color: grey[100] }}/>
            </IconButton>
          </div>
        </animated.div>
    </div>
  );
}