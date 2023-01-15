import React, { useState, useMemo } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import InfoPopup from "./components/Popups/InfoPopup/InfoPopup";
import VideoPopup from "./components/Popups/VideoPopup/VideoPopup";
import InfoPopupContext from "./contexts/InfoPopupContext";
import VideoPopupContext from "./contexts/VideoPopupContext";
import "./pages/index.css";

function App() {
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);
  const [isVideoPopupOpen, setVideoPopupOpen] = useState(false);
  const infoPopupContext = useMemo(
    () => ({ isInfoPopupOpen, setInfoPopupOpen }),
    [isInfoPopupOpen]
  );
  const videoPopupContext = useMemo(
    () => ({ isVideoPopupOpen, setVideoPopupOpen }),
    [isVideoPopupOpen]
  );

  return (
    <InfoPopupContext.Provider value={infoPopupContext}>
      <VideoPopupContext.Provider value={videoPopupContext}>
        <div className="app">
          <Header />
          <Main />
          <Footer />
          <InfoPopup />
          <VideoPopup />
        </div>
      </VideoPopupContext.Provider>
    </InfoPopupContext.Provider>
  );
}

export default App;
