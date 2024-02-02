import getThemePalette from 'components/themeComponent/getThemePalette';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const App = () => {
  const theme = createTheme(getThemePalette(user.theme));

  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
  );
};