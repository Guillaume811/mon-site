import React, { useState } from "react";

type Todo = {
    //id: number;
    task: string;
};

const Todolist: React.FC = () => {

    const [inputValue, setInputValue] = useState<string>('');

    const [todos, setTodos] = useState<string[]>([
        //{id: 1, task: 'Faire afficher la TO DO'},
        //{id: 2, task: 'Faire afficher la ligne 2 de la TO DO'},
    ]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Empêche le rechargement de la page pour ne pas perdre les donnée saisie par l'utilisateur
        event.preventDefault();
        
        // Vérifie que l'input n'est pas vide
        if (inputValue.trim() !== "") {
            // Ajoute inputValue au tableau
            setTodos([...todos, inputValue]);
            // Réinitialise l'input après l'ajout
            setInputValue("");
        }
    };

    const handleDelete = (indexToRemove: number) => {
        setTodos(todos.filter((_, index) => index !== indexToRemove));
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Définir une task :
                    <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>
                <button type="submit">Ajouter</button>
            </form>
            <ul>
                {todos.length > 0 ? (
                    todos.map((todo, index) => (
                        <li 
                        key={index}  
                        onClick={() => handleDelete(index)}
                        >
                            {todo}
                        </li>
                    ))
                ) : (
                    <li>Aucune task ne s'affiche</li>
                )}
            </ul>
        </div>
        
    );
};

export default Todolist;