import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      primary: {
        main: '#1976d2',
    },
      secondary: {
        main: '#dc004e',
    },
      background: {
        default: '#f0f0f0',
      },
      text: {
        primary: '#333',
      }
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
});

export default theme;