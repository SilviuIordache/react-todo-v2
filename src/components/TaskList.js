import { Card } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext.js';

export default function TaskList() {
  const tasks = useTasks();
  const items = tasks.map((task) => <Task task={task} key={task.id} />);

  return (
    <Card variant="outlined" sx={{ padding: '2rem' }}>
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
      <Box>
        <input
          type="checkbox"
          checked={task.done}
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
        {taskContent}
      </Box>
      <Box>
        {isEditing ? (
          <button onClick={() => setIsEditing(false)}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button
          onClick={() => {
            dispatch({
              type: 'deleted',
              id: task.id,
            });
          }}
        >
          Delete
        </button>
      </Box>
    </Box>
  );
}
