import React, { useState, createContext } from "react";
import { lightTheme, darkTheme } from "./theme";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const themePreference = localStorage.getItem("themePreference");
  const [theme, setTheme] = useState(
    themePreference === "light" ? lightTheme : darkTheme
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
