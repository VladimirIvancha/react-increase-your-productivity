import React, { useContext } from "react";
import CircleShape from "../Shapes/Circle/CircleShape";
import HeaderTextMenu from "../Menus/HeaderText/HeaderTextMenu";
import HeaderIconsMenu from "../Menus/HeaderIcons/HeaderIconsMenu";
import ActionButton from "../Buttons/Action/ActionButton";
import InfoPopupContext from "../../contexts/InfoPopupContext";

function Footer() {
  const { setInfoPopupOpen } = useContext(InfoPopupContext);

  function handleBtnClick() {
    setInfoPopupOpen(true);
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <CircleShape className={"footer__circleShape"} />
          <HeaderTextMenu />
        </div>
        <div className="footer__wrapper">
          <HeaderIconsMenu />
          <ActionButton
            name={"Get Started"}
            className={"footer__actionButton"}
            onClick={handleBtnClick}
          />
        </div>
      </div>
      <p className="footer__copyright">
        Copyright &copy; 2022 by Vladimir Ivancha
      </p>
    </footer>
  );
}
export default Footer;
