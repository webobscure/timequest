import React, { createContext, useContext, useState } from 'react';

// Создаём контекст темы
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Храним текущую тему как строку

  const setDarkTheme = () => {
    setTheme('dark'); // Устанавливаем тёмную тему
  };

  const setLightTheme = () => {
    setTheme('light'); // Устанавливаем светлую тему
  };

  const setSystemTheme = () => {
    setTheme('system'); // Устанавливаем системную тему
  };
  return (
    <ThemeContext.Provider value={{ 
      isDarkTheme: theme === 'dark', 
      setDarkTheme, 
      setLightTheme, 
      setSystemTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};