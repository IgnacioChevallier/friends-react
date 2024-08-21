import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import './index.css';
import Home from './screens/Home.tsx';
import theme from './utils/themes.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </StrictMode>,
);