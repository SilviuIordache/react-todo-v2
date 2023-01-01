import { Container } from '@mui/system';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList.js';
import { TasksProvider } from './components/TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
        <AddTask />
        <TaskList />
      </Container>
    </TasksProvider>
  );
}
