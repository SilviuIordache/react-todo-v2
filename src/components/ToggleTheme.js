import { Card, Switch } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box } from '@mui/system';
import { useThemeDispatch } from '../contexts/ThemeContext';

export default function ToggleTheme() {
  
  const localTheme = false;
  const dispatch = useThemeDispatch();
  
  function toggleTheme() {
    dispatch({
      type: 'toggle'
    })
  }

  return (
    <Card sx={{ padding: '2rem' }}>
      <h3>Theme switch</h3>

      <Box sx={{ alignItems: 'center', display: 'flex' }}>
        <DarkModeIcon />
        <Switch {...localTheme} onChange={toggleTheme} />
        <LightModeIcon />
      </Box>
    </Card>
  );
}
