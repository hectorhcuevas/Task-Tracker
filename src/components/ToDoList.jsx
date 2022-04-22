import React, {useState, useEffect, Component, useRef} from 'react';
import MUIDataTable from "mui-datatables";import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ListSubheader from '@mui/material/ListSubheader';
import AddItem from './AddItem'
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Constants from './constants';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';



let nextId = 0;

export default function ToDoList() {
  const [task, setTask] = useState("")
  const [list, setList] = useState([]);
  const [completedTask, setCompletedTask] = useState("");
  const [completedList, setCompletedList] = useState([]);
  const textInput = useRef('');



  function handleAdd() {
    setTask('');
    setList([
      ...list,
      { id: nextId++, task: task }
    ]);
  }

  function handleCompletedAdd(task) {
    console.log(task);
    setCompletedList([
      ...completedList,
      { id: nextId++, completedTask: task }
    ]);
    console.log(completedList);
  }

  function handleRemove() {
    // remove item
    setList(
      list.filter(e =>
        e.id !== task.id
      )
    )
  };


  return (
    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
      <Stack>
        <TextField
              variant="outlined"
               placeholder="Add todo"
               margin="normal"
              onChange={e => setTask(e.target.value)} />
            <Button type="submit" variant="contained" endIcon={<AddIcon />} onClick={handleAdd}>
            </Button>
      <List>
      <ListSubheader component="div" id="nested-list-subheader">
        To-Do Tasks
      </ListSubheader>
      {list.map(task => (
        <ListItem key={task.id} dense button>
          <ListItemText primary={task.task} />
              <Button type="submit" variant="contained" endIcon={<DeleteIcon />} onClick={() => {
              setList(
                list.filter(a =>
                  a.id !== task.id
                )
              ); 
            }}>
            </Button>
          <Checkbox tabIndex={-1} disableRipple onChange={ e => { handleCompletedAdd(task.task) } }/>
        </ListItem>
      ))}
    </List>
    </Stack>
    <List>
      <ListSubheader component="div" id="nested-list-subheader">
        Completed Tasks
      </ListSubheader>
      {completedList.map(completedTask => (
        <ListItem key={completedTask.id} dense button>
          <ListItemText primary={completedTask.completedTask} />
              <Button type="submit" variant="contained" endIcon={<DeleteIcon />} onClick={() => {
              setCompletedList(
                completedList.filter(a =>
                  a.id !== completedTask.id
                )
              );
            }}>
            </Button>
        </ListItem>
      ))}
    </List>
        </Stack>
  )};
