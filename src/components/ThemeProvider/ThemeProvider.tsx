import React, { useState } from "react";

type Theme = false | true;
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeMode = React.createContext<ThemeContext>({} as ThemeContext);
ThemeMode.displayName = "My Theme Context Mode";

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(false);
  const toggleTheme = () => {
    setTheme(theme === false ? true : false);
  };

  return (
    <ThemeMode.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeMode.Provider>
  );
};

export default ThemeProvider;
