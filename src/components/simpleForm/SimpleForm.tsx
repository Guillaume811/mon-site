import React, { useState } from 'react';

const SimpleForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le rechargement de la page
    alert(`Vous avez soumis : ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Saisissez un texte :
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button type="submit">Valider</button>
    </form>
  );
};

export default SimpleForm;