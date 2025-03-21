import React, { useEffect, useState } from 'react';

// Typage
type User ={
    id: number;
    name : string;
    username: string;
    email: string;
}
// Component
const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // Déclenche l'appel API quand le composant est monté
        fetch('https://jsonplaceholder.typicode.com/users')
            // Transforme la réponse en JSON
            .then((response) => response.json())
            // Récupère les data en JSON, on idique que ce sont des objet de type User et on les enregistre dans l'état user
            .then((data: User[]) => setUsers(data))
            // Gestion de l'erreur
            .catch((error) => console.error(error))
    }, []);

    return (
        <div>
            <h3>Liste des Users</h3>
            <ul>
                {users.slice(0,10).map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong><br />
                        <strong>{user.username}</strong><br />
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;