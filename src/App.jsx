import React, { useState, useMemo } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import InfoPopup from "./components/Popups/InfoPopup/InfoPopup";
import InfoPopupContext from "./contexts/InfoPopupContext";
import "./pages/index.css";

function App() {
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);
  const infoPopupContext = useMemo(() => ({isInfoPopupOpen, setInfoPopupOpen}), [isInfoPopupOpen]);
  
  return (
    <InfoPopupContext.Provider value={infoPopupContext}>
      <div className="app">
        <Header />
        <Main />
        <Footer />
        <InfoPopup />
      </div>
    </InfoPopupContext.Provider>
  );
}

export default App;
