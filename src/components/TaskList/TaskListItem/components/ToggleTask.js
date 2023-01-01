import { Checkbox } from '@mui/material';
import { useTasksDispatch } from 'contexts/TasksContext';

export default function ToggleTask({ task }) {
  const dispatch = useTasksDispatch();

  return (
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
  );
}
