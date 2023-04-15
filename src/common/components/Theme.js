import { useState, useEffect, createContext } from 'react';

const initTheme = () => {
  const persistentTheme = window.localStorage.getItem('theme');
  const preferDark = window.matchMedia('(prefers-color-scheme: dark)');

  if (persistentTheme === 'dark' || persistentTheme === 'light') {
    return persistentTheme;
  } else if (preferDark.matches) {
    return 'dark';
  } else {
    return 'light';
  }
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(initTheme());

  useEffect(() => {
    const root = window.document.documentElement;
    const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

    root.classList.remove(inactiveTheme);
    root.classList.add(activeTheme);

    localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
