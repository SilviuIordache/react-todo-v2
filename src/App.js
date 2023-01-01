import { Box } from '@mui/material';
import { Container } from '@mui/system';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList.js';
import { TasksProvider } from './components/TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
        <Box sx={{ marginBottom: '0.5rem'}}>
          <AddTask />
        </Box>
        <TaskList />
      </Container>
    </TasksProvider>
  );
}
