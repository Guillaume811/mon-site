import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';

// Return mes routes
// TODO: se renseigner sur 'ThemeProvider' et 'AuthProvider'
function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
