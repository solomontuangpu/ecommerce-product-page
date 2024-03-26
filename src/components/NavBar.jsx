import React, { useState } from "react";

import Logo from "./../assets/logo.svg";
import CartIcon from "./../assets/icon-cart.svg";
import UserIcon from "./../assets/image-avatar.png";
import MenuIcon from "./../assets/icon-menu.svg";
import MobileNav from "./MobileNav";
import TransparentScreen from "./TransparentScreen";
import Cart from "./Cart";
import { CustomProductContext } from "../context/ProductContext";

const NavBar = () => {
  const { cart } = CustomProductContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='mobile:mx-0 mobile:px-5 mobile:py-5 mobile:sticky mobile:top-0 flex items-center mx-20 mobile:border-none border-b-2 border-grayishBlue bg-white relative z-30'>
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
          <li className='w-20 h-28 text-center hover:border-b-4 border-b-orange cursor-pointer py-10'>
            Collections
          </li>
          <li className='w-20 h-28 text-center hover:border-b-4 border-b-orange cursor-pointer py-10'>
            Men
          </li>
          <li className='w-20 h-28 text-center hover:border-b-4 border-b-orange cursor-pointer py-10'>
            Women
          </li>
          <li className='w-20 h-28 text-center hover:border-b-4 border-b-orange cursor-pointer py-10'>
            About
          </li>
          <li className='w-20 h-28 text-center hover:border-b-4 border-b-orange cursor-pointer py-10'>
            Contact
          </li>
        </ul>

        <div className='flex items-center'>
          <div className='relative' onClick={() => setIsCartOpen(!isCartOpen)}>
            <img src={CartIcon} className='mobile:pr-5 pr-10 cursor-pointer' />

            <div
              className={`${
                cart.length < 1 ? "hidden" : ""
              } flex justify-center items-center p-1 w-8 h-6 rounded-full bg-orange absolute top-2 left-3`}
            >
              <p className=' text-white font-bold'>{cart.length}</p>
            </div>
          </div>
          <div>
            <img
              src={UserIcon}
              className=' h-12 cursor-pointer hover:border-2 border-orange rounded-full'
            />
          </div>
        </div>
      </main>

      <Cart isCartOpen={isCartOpen} />

      <MobileNav isOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
      <TransparentScreen isOpen={isMenuOpen} />
    </div>
  );
};

export default NavBar;
