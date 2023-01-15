import React, { useContext, useEffect } from "react";
import VideoPopupContext from "../../../contexts/VideoPopupContext";

function VideoPopup() {
  const { isVideoPopupOpen, setVideoPopupOpen } = useContext(VideoPopupContext);
  const classNamePopup = `videoPopup ${
    isVideoPopupOpen && "videoPopup_is-opened"
  }`;

  // Слушатель на нажатие кнопки Esc для закрытия попапа
  useEffect(() => {
    const handlerKeyClick = (evt) => {
      if (evt.key === "Escape") {
        handleClosePopup();
      }
    };
    if (isVideoPopupOpen) {
      document.addEventListener("keydown", handlerKeyClick);
    } else {
      document.removeEventListener("keydown", handlerKeyClick);
    }
  }, [isVideoPopupOpen]);

  // Функция закрытия попапа
  function handleClosePopup() {
    setVideoPopupOpen(false);
  }

  // Слушатель на клик вне попапа для его закрытия
  function handleMouseClick(evt) {
    if (evt.target.classList.contains("videoPopup_is-opened")) {
      handleClosePopup();
    }
  }

  return (
    <section
      id="video-popup"
      className={classNamePopup}
      onMouseDown={handleMouseClick}
    >
      <div className="videoPopup__container">
        <button
          type="button"
          className="videoPopup__btn-close"
          onClick={handleClosePopup}
          aria-label="Кнопка закрыть"
        ></button>
        {
          isVideoPopupOpen &&
          <iframe allowFullScreen="" allow="autoplay" src="https://www.youtube.com/embed/COaXBeiKezw?rel=0&amp;showinfo=0&amp;autoplay=1" className="videoPopup__popup-video"></iframe>
        }
      </div>
    </section>
  );
}

export default VideoPopup;
