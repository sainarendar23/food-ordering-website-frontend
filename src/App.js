import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Navbar } from './component/Navbar/Navbar';
import CustomerRoute from './component/Routers/CustomerRoute';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
