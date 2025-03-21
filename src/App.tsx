import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import Todolist from './components/Todolist/Todolist';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title='TO-DO LIST' />
        <Todolist />
      </header>
      
    </div>
  );
}

export default App;
