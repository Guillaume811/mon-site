import React, { createContext, useContext, useState, ReactNode} from "react";

//Typage
// Définit le type de Theme
type Theme = 'light' | 'dark';

// Définit ce que notre contexte (theme) va contenir
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

// Création du contexte réel
// Initialiser sur 'undefined', ce qui permet de vérifier s'il est utilisé correctement
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Création du composant provider qui recoit des 'children à afficher à l'intérieur du provider
// Provider : Composant spécial utiliser avec un contexte, fournie une donner à tout l'arbre de composants enfants sans passer les props manuellement
export const ThemeProvider = ({ children }: { children: ReactNode}) => {
    // On initialise l'état local de 'theme' à 'light'
    const [theme, setTheme] = useState<Theme>('light');

    // Permet de basculer de 'dark' à 'light'
    // 'prev' : permet de récupéré la dernière valeur de l'état
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        // Fournit la valeur du context à tous les enfants
        // La class dépend du theme
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

// création d'un hook personnalisé pour simplifier l'accès au contexte
export const useTheme = () => {
    // Récupère la valeur de 'useContext'
    const context = useContext(ThemeContext);
    // Vérifie que le context existe et s'il est bien utiliser dans le provider
    if (!context) throw new Error('useTheme doit être utilisé dans ThemeProvider');
    return context;
};