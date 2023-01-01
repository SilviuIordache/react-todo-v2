import { Card, Switch } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box } from '@mui/system';


export default function ToggleTheme() {
  // const theme = useTheme();
  // const dispatch = useThemeDispatch();

  // console.log(theme)

  const localTheme = false

  return (
    <Card sx={{ padding: '2rem' }}>
      <h3>Theme switch</h3>

      <Box sx={{ alignItems: 'center', display: 'flex' }}>
        <LightModeIcon />
        <Switch {...localTheme} />
        <DarkModeIcon />
      </Box>
    </Card>
  );
}
