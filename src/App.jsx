import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider, AppContext } from "./Context/Dark-mode";
import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import Footer from "./Components/Footer";
import { Contacto } from "./Pages/Contacto";

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

function AppContent() {
  const { theme } = useContext(AppContext);
  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/favs" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
