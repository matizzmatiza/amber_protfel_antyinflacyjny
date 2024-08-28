import React from 'react';
import MenuImg from './img/burger.png'

const BurgerMenu = () => {
  return (
    <button className='burger'>
      <img src={MenuImg} alt="Menu button"/>
    </button>
  );
};

export default BurgerMenu;
