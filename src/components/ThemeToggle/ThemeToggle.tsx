import React from "react";
import { useTheme } from '../../theme/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Passer en mode {theme === 'light' ? 'Dark' : 'Light'}
        </button>
    );
};

export default ThemeToggle;