import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F6A812',
      A700: '#f6ba26',
    },
    secondary: {
      main: '#2695F3',
    },
    background: {
      default: '#EEEEEE',
    },
    grey: {
      100: '#EEEEEE',
      200: '#ccc',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});
