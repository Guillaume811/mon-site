import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './theme/ThemeContext';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

// Return mes routes
// TODO: se renseigner sur 'ThemeProvider' et 'AuthProvider'
function App() {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider>
      <Navbar />
      {routing}
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
