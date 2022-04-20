import * as React from 'react';
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



export default function DoneList() {
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

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} 
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
       Completed Tasks
      </ListSubheader>}>
      {completedTasks.map(() => {
        const labelId = `checkbox-list-label-$`;
        return (
          
          <ListItem
            key={"placeholder"}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle()} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf() !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${1 + 1}`} />
            </ListItemButton>
            <ListItemSecondaryAction>
                <IconButton
                  aria-label="Delete"
                  onClick={console.log("deleted")}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
