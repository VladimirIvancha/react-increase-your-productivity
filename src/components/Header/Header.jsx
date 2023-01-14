import React, { useContext } from "react";
import CircleShape from "../Shapes/Circle/CircleShape";
import HeaderTextMenu from "../Menus/HeaderText/HeaderTextMenu";
import HeaderIconsMenu from "../Menus/HeaderIcons/HeaderIconsMenu";
import ActionButton from "../Buttons/Action/ActionButton";
import PageLine from "../Shapes/Lines/PageLine";
import InfoPopupContext from "../../contexts/InfoPopupContext";

function Header() {
  const { setInfoPopupOpen } = useContext(InfoPopupContext);

  function handleBtnClick() {
    setInfoPopupOpen(true);
  }

  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__wrapper">
          <CircleShape className={"header__circleShape"} />
          <HeaderTextMenu />
        </div>
        <div className="header__wrapper">
          <HeaderIconsMenu />
          <ActionButton
            name={"Get Started"}
            className={"header__actionButton"}
            onClick={handleBtnClick}
          />
        </div>
      </div>
      <PageLine id={"header-pageLine"} />
    </header>
  );
}
export default Header;
