import { Box } from '@mui/material';
import { Container } from '@mui/system';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList.js';
import ToggleTheme from './components/ToggleTheme';
import AppProvider from './contexts/AppContext';

export default function App() {
  return (
    <AppProvider>
      <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
        <Box sx={{ marginBottom: '0.5rem' }}>
          <ToggleTheme />
        </Box>
        <Box sx={{ marginBottom: '0.5rem' }}>
          <AddTask />
        </Box>
        <TaskList />
      </Container>
    </AppProvider>
  );
}
