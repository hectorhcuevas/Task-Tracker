import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import useInputState from './useInputState';

const AddItem = () => {
    const [task, setTask] = useState('')
    const { value, reset, onChange } = useInputState();
  return (
    <Grid container> 
        <form
            onSubmit={event => {
                event.preventDefault();
                setTask(value)
                reset();
            } }
        >
            <TextField
                variant="outlined"
                placeholder="Add todo"
                margin="normal"
                onChange={onChange}
                value={value} />
            <Button type="submit" variant="contained" endIcon={<AddIcon />} onClick={event => {
                event.preventDefault();
                setTask(value)
                reset();
            } }>
            </Button>
        </form>
        </Grid>
  );
}

export default AddItem;