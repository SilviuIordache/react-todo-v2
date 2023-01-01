import { Box, Button, Card, TextField } from '@mui/material';
import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';
import AddIcon from '@mui/icons-material/Add';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    addItem();
  }

  function addItem() {
    setText('');
    dispatch({
      type: 'added',
      id: Date.now(),
      text: text,
    });
  }

  return (
    <Card variant="outlined" sx={{ padding: '2rem' }}>
      <h3>Add a new task</h3>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', marginTop: '2rem' }}>
          <TextField
            label="Add task"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            endIcon={<AddIcon />}
            onClick={addItem}
            disabled={text.length === 0}
            sx={{
              marginLeft: '0.5rem',
              paddingX: '2rem',
            }}
          >
            Add
          </Button>
        </Box>
      </form>
    </Card>
  );
}
