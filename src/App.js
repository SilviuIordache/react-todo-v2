import { Box } from '@mui/material';
import { Container } from '@mui/system';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList.js';
import ToggleTheme from './components/ToggleTheme';
import { TasksProvider } from './contexts/TasksContext.js';
import { CustomThemeProvider } from './contexts/ThemeContext';

export default function TaskApp() {
  return (
    <TasksProvider>
      <CustomThemeProvider>
        <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
          <Box sx={{ marginBottom: '0.5rem' }}>
            <ToggleTheme />
          </Box>
          <Box sx={{ marginBottom: '0.5rem' }}>
            <AddTask />
          </Box>
          <TaskList />
        </Container>
      </CustomThemeProvider>
    </TasksProvider>
  );
}
