import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function AddItem() {
  return (
    <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
        <Input placeholder="Enter Task" />
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
    </Stack>
  );
}