import React, {useState, useEffect, Component} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListSubheader from '@mui/material/ListSubheader';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Constants from './constants';
import Button from '@mui/material/Button';





export default function DoneList() {
  const initialTasks = ["go fishing", "run 30min", "call mom"]
  /* old code for check mark handling
  const [checked, setChecked] = React.useState([0]);
  const completedTasks = Constants.completedTasks;

  const handleToggle = () => () => {
    const currentIndex = checked.indexOf();
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push();
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  below is attr for checkbox
   checked={checked.indexOf() !== -1}

  */

  return (
    console.log("obsolete")
  )}
