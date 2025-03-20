import React, { useState } from "react";

type Todo = {
    id: number;
    task: string;
};

const Todolist: React.FC = () => {

    const [todos, setTodos] = useState<Todo[]>([
        //{id: 1, task: 'Faire afficher la TO DO'},
        //{id: 2, task: 'Faire afficher la ligne 2 de la TO DO'},
    ]);

    return (
        <ul>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))
            ) : (
                <li>Aucune task ne s'affiche</li>
            )}
        </ul>
    );
};

export default Todolist;