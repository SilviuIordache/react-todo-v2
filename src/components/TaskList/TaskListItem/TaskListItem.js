import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { Box } from '@mui/system';
import { useState } from 'react';
import TaskContent from './components/TaskContent.js';
import ToggleTask from './components/ToggleTask.js';
import DeleteTask from './components/DeleteTask.js';


export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ alignItems: 'center', display: 'flex' }}>
        <ToggleTask task={task} />
        <TaskContent task={task} isEditing={isEditing} />
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

        <DeleteTask task={task} />
      </Box>
    </Box>
  );
}
