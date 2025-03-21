import React from "react";
import Title from '../../components/Title/Title';
import Todolist from '../../components/Todolist/Todolist';

// Typage

// Components
const Home = () => {

    return (
    <div className="App">
      <header className="App-header">
        <Title title='TO-DO LIST' />
        <Todolist />
      </header>
      
    </div>
    );
}

export default Home;