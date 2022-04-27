import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ToDoList from '../components/ToDoList';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import "./homepage.css";


export default function Home() {
    return (
      <Stack>
      <Box sx={{ width: '100%' }}
            display="flex"
            justifyContent="center"
            alignItems="center"
      >
      <Typography variant="h1" component="div" gutterBottom>
        Task Tracker
      </Typography>
      </Box>
      <Box sx={{ width: '100%' }}   
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
           <ToDoList />
      </Box>
      </Stack>
    );
  }
