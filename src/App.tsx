import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';
import Navbar from './components/Navbar/Navbar';

// Return mes routes
// TODO: se renseigner sur 'ThemeProvider' et 'AuthProvider'
function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <Navbar />
      {routing}
    </>
  );
}

export default App;
