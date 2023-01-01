import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useTasksDispatch } from 'contexts/TasksContext';

export default function DeleteTask({ task }) {
  const dispatch = useTasksDispatch();

  return (
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
  );
}
