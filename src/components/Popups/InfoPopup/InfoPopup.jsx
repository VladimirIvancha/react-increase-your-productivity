import React, { useContext, useEffect } from 'react';
import success from "../../../assets/images/success.svg"; 
import InfoPopupContext from '../../../contexts/InfoPopupContext';

function InfoPopup () {
  const { isInfoPopupOpen, setInfoPopupOpen } = useContext(InfoPopupContext);
  const classNamePopup = `infoPopup ${isInfoPopupOpen && 'infoPopup_is-opened'}`

  // Слушатель на нажатие кнопки Esc для закрытия попапа
  useEffect(() => {
    const handlerKeyClick = (evt) => {
      if (evt.key === "Escape") {
        handleClosePopup();
      }
    };
    if (isInfoPopupOpen) {
      document.addEventListener("keydown", handlerKeyClick);
    } else {
      document.removeEventListener("keydown", handlerKeyClick);
    }
  }, [isInfoPopupOpen]);

  // Функция закрытия попапа
  function handleClosePopup() {
    setInfoPopupOpen(false);
  }

  // Слушатель на клик вне попапа для его закрытия
  function handleMouseClick(evt) {
    if (evt.target.classList.contains("infoPopup_is-opened")) {
      handleClosePopup();
    }
  }

  return (
    <div className={classNamePopup} onMouseDown={handleMouseClick}>
      <div className="infoPopup__info">
        <img src={success} alt="Check icon" className="infoPopup__image"/>
        <h2 className="infoPopup__title">Button successfully pressed</h2>
        <button className="infoPopup__button-close" type="button" onClick={handleClosePopup}></button>
      </div>
    </div>  
  )
}

export default InfoPopup