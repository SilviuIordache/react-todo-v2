import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useReducer } from 'react';

const ThemeDispatchContext = createContext(null);

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function CustomThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [theme, dispatch] = useReducer(
    themeReducer,
    prefersDarkMode ? darkTheme : lightTheme
  );

  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </ThemeDispatchContext.Provider>
  );
}

export function useThemeDispatch() {
  return useContext(ThemeDispatchContext);
}

function themeReducer(theme, action) {
  switch (action.type) {
    case 'toggle': {
      return theme.palette.mode === 'light' ? darkTheme : lightTheme;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
