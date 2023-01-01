import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useMemo, useReducer } from 'react';

const ThemeDispatchContext = createContext(null);

export function CustomThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [theme, dispatch] = useReducer(
    themeReducer,
    useMemo(
      () =>
        createTheme({
          palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
          },
        }),
      [prefersDarkMode]
    )
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
      theme = createTheme({
        palette: {
          mode: 'light',
        },
      });
      return theme;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
