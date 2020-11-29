import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#ffff80',
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircleBoi() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={100} style={{'color': '#ffff80'}}/>
    </div>
  );
}