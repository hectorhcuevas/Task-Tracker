import React, {useState, useEffect, Component, useRef} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
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
import UndoIcon from '@mui/icons-material/Undo';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import './ToDoList.css';



let nextId = 0;

export default function ToDoList() {
  const [task, setTask] = useState("")
  const [list, setList] = useState([]);
  const [completedTask, setCompletedTask] = useState("");
  const [completedList, setCompletedList] = useState([]);
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState('');
  const [editValue, setEditValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);


  const textInput = useRef("");
  const editInput = useRef(null);

  const setActive = (index) => {
    setSelectedIndex(index);
};

  function handleAdd() {
    setTask('');
    setList([
      ...list,
      { id: nextId++, task: task }
    ]);
    textInput.current.value = "";
  }

  function handleNewCompletedAdd() {
    setCompletedTask('');
    setCompletedList([
      ...completedList,
      { id: nextId++, completedTask: completedTask }
    ]);
    textInput.current.value = "";
  }

  function handleCompletedAdd(task) {
    console.log(task);
    setCompletedList([
      ...completedList,
      { id: nextId++, completedTask: task }
    ]);
  }


  function handleRemove() {
    // remove item
    setList(
      list.filter(e =>
        e.id !== task.id
      )
    )
  };

  function handleUndo(completedTask) {
    console.log(completedTask);
    setList([
      ...list,
      { id: nextId++, task: completedTask }
    ]);
  };

  function handleEdit(e) {
    setIsEditing(true);
    //setCompletedTask(e.target.value);
  };


  function handleRemoveEdit() {
    // remove item
    setCompletedList(
      completedList.filter(e =>
        e.id !== completedTask.id
      )
    )
  };

  function handleEditAdd() {
    setCompletedTask("");
    setIsEditing(false);
    setCompletedList([
      ...completedList,
      { id: nextId++, completedTask: completedTask
    }
    ]);
    editInput.current.value = "";
  }

  function updateFieldChanged(index) {
    const newArr = [...completedList];
    newArr[index].completedTask = editInput.current.value
    setCompletedList(newArr);
  }
  

  return (
    <Stack container spacing={5} direction="row" divider={<Divider orientation="vertical" flexItem />}>
      <Stack container>
        <TextField
              className="toDoListText"
              variant="outlined"
              inputRef={textInput}
               placeholder="Add todo"
               margin="normal"
               type="search"
              onChange={e => { setTask(e.target.edit); setValue('');} }/>
            <Button className="addButton" type="submit" variant="contained" endIcon={<AddIcon />} onClick={ handleAdd } >
            </Button>
      <List className="toDoList">
      <ListSubheader component="div" id="nested-list-subheader">
        To-Do Tasks
      </ListSubheader>
      {list.map(task => (
        <ListItem key={task.id} dense button>
          <Checkbox className="checkbox" tabIndex={-1} disableRipple onChange={ e => { handleCompletedAdd(task.task);
              setList(
                list.filter(a =>
                  a.id !== task.id
                ) ) } }/>
          <ListItemText primary={task.task} sx={{ margin: 2 }} inputRef={textInput} />
              <Button type="submit" variant="contained" endIcon={<EditIcon />} onClick={handleEdit}
              >
              </Button>
              <Button type="submit" variant="contained" endIcon={<DeleteIcon />} onClick={() => {
              setList(
                list.filter(a =>
                  a.id !== task.id
                )
              ); 
            }}>
            </Button>
        </ListItem>
      ))}
    </List>
    </Stack >
    <Stack container > 
    <TextField
              type="search"
              className="toDoListText"
              variant="outlined"
              inputRef={textInput}
               placeholder="Add todo"
               margin="normal"
              onChange={e => { setCompletedTask(e.target.value); setValue('');} }/>
            <Button className="addButton" type="submit" variant="contained" endIcon={<AddIcon />} onClick={ handleNewCompletedAdd }>
            </Button>
    <List className="completedList">
      <ListSubheader component="div" id="nested-list-subheader">
        Completed Tasks
      </ListSubheader>
      {completedList.map((completedTask, index) => (
        <ListItem key={completedTask.id} dense button onClick={(e) => { setActive(index); }} >
              <Button className="undoCompletedTask" endIcon={<UndoIcon />} tabIndex={-1} disableRipple onClick={ e => { handleUndo(completedTask.completedTask); 
                  setCompletedList(
                    completedList.filter(a =>
                      a.id !== completedTask.id
                    )
                  ); } }>
                </Button>
          { isEditing ? 
                    (
                      <Stack>
                      <TextField
                        className="toDoListText"
                        variant="outlined"
                        inputRef={editInput}
                         placeholder="Add todo"
                         margin="normal"
                         type="search"
                        onChange={e => { setCompletedTask(e.target.editValue); setEditValue("")}
                       }/>
                       <Button type="submit" variant="contained" endIcon={<AddIcon />} onClick={() => { setCompletedList(
                        completedList.filter(a =>
                          a.id !== completedTask.id
                        )
                      );
                        setIsEditing(false);
                        updateFieldChanged(index); console.log(completedTask)} }>     
                       </Button>
                     </Stack>
                    )
          :
          (
            <ListItemText primary={completedTask.completedTask} sx={{ margin: 2 }} /> 
          )}
              <Button type="submit" variant="contained" endIcon={<EditIcon />} onClick={ e => { handleEdit(e);} }
              >
              </Button>
              <Button type="submit" variant="contained" endIcon={<DeleteIcon />} onClick={() => {
              setCompletedList(
                completedList.filter(a =>
                  a.id !== completedTask.id
                )
              );
            }}
            sx={{ width: 50 }} 
            >
            </Button>
        </ListItem>
      ))}
      </List>
      </Stack>
    </Stack>
  )};
