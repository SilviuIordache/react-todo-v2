import TasksProvider from './TasksContext';
import CustomThemeProvider from './ThemeContext';

export default function AppProvider({children}) {
  return (
    <TasksProvider>
      <CustomThemeProvider>
        {children}
      </CustomThemeProvider>
    </TasksProvider>
  );
}
