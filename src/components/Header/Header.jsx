import React from 'react';
import CircleShape from '../Shapes/Circle/CircleShape';
import HeaderTextMenu from '../Menus/HeaderText/HeaderTextMenu';
import HeaderIconsMenu from '../Menus/HeaderIcons/HeaderIconsMenu';
import ActionButton from '../Buttons/Action/ActionButton';

function Header() {
  return (
    <header className="header">
      <div className='header__wrapper'>
        <CircleShape/>
        <HeaderTextMenu/>
      </div>
      <div className='header__wrapper'>
        <HeaderIconsMenu/>
        <ActionButton
          name='Get Started'
          className={'headerActionButton'}
        />
      </div>
    </header>
  );
}
export default Header;