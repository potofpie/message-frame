import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function CircleBoi() {
  return (
    <div>
      <CircularProgress size={100} style={{'color': '#ffff80'}}/>
    </div>
  );
}