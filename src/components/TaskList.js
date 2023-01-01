import { IconButton, Card, Checkbox } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

import { Box } from '@mui/system';
import { useState } from 'react';
import { useTasks, useTasksDispatch } from '../contexts/TasksContext.js';

export default function TaskList() {
  const tasks = useTasks();
  const items = tasks.map((task) => <Task task={task} key={task.id} />);

  return (
    <Card variant="outlined" sx={{ padding: '2rem' }}>
      <h3>Task List</h3>
      {items}
    </Card>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
      </>
    );
  } else {
    taskContent = <>{task.text}</>;
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ alignItems: 'center', display: 'flex' }}>
        <Checkbox
          {...task.done}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />
        <div>{taskContent}</div>
      </Box>
      <Box>
        {isEditing ? (
          <IconButton variant="contained" onClick={() => setIsEditing(false)}>
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton variant="contained" onClick={() => setIsEditing(true)}>
            <EditIcon />
          </IconButton>
        )}
        <IconButton
          variant="contained"
          onClick={() => {
            dispatch({
              type: 'deleted',
              id: task.id,
            });
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
