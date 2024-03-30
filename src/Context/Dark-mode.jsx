import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Tema por defecto
  const [data, setData] = useState(null); // Datos por defecto

  // Llamada a la API
  useEffect(() => {
    fetch("URL_DE_LA_API")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return <AppContext.Provider value={{ theme, setTheme, data, setData }}>{children}</AppContext.Provider>;
};
