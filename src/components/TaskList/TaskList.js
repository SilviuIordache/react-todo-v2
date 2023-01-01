import { Card } from '@mui/material';

import { useTasks } from '../../contexts/TasksContext';

import TaskListItem from './TaskListItem/TaskListItem.js';

export default function TaskList() {
  const tasks = useTasks();
  const items = tasks.map((task) => <TaskListItem task={task} key={task.id} />);

  return (
    <Card variant="outlined" sx={{ padding: '2rem' }}>
      <h3>Task List</h3>
      {items}
    </Card>
  );
}
