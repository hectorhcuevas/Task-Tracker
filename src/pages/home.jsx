import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ToDoList from '../components/ToDoList';
import DoneList from '../components/DoneList';
import AddItem from '../components/AddItem';
import "./homepage.css";


export default function Home() {
    return (
      <Box sx={{ width: '100%' }}>
          <Stack>
            <AddItem />
           <ToDoList />
           <DoneList />
          </Stack>
      </Box>
    );
  }
