import React, { useState } from "react";

import Logo from "./../assets/logo.svg";
import CartIcon from "./../assets/icon-cart.svg";
import UserIcon from "./../assets/image-avatar.png";
import MenuIcon from "./../assets/icon-menu.svg";
import Aside from "./Aside";
import TransparentScreen from "./TransparentScreen";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=' mobile:px-5 mobile:py-5 flex items-center py-10  mobile:border-none border-b-2 border-grayishBlue relative'>
      <div className='flex items-end'>
        <img
          src={MenuIcon}
          className='mobile:block mobile:h-5 hidden  mr-5 pb-0 cursor-pointer'
          onClick={handleMenuClick}
        />

        <img src={Logo} className='mobile:h-7 pr-14' />
      </div>

      <main className='flex mobile:justify-end justify-between items-center w-full'>
        <ul className=' mobile:hidden flex justify-between w-[600px] text-darkGrayishBlue'>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className='flex items-center'>
          <img src={CartIcon} className='mobile:pr-5 pr-10' />
          <div>
            <img src={UserIcon} className=' h-12' />
          </div>
        </div>
      </main>

      <Aside isOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
      {/* <TransparentScreen isOpen={isMenuOpen} /> */}
    </div>
  );
};

export default NavBar;
