import React from "react";
import CloseIcon from "./../assets/icon-close.svg";

const MobileNav = ({ isOpen, handleMenuClick }) => {
  const position = isOpen
    ? "animate-openmenu left-0"
    : "animate-closemenu left-[-300px]";

  return (
    <aside
      className={`hidden mobile:block 
      p-5 border-r-2 bg-white w-2/3 absolute h-screen top-0 z-50 ${position}`}
    >
      <img src={CloseIcon} className='pb-10' onClick={handleMenuClick} />
      <ul className='py-5 text-2xl font-bold flex flex-col justify-between h-[300px]'>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
};

export default MobileNav;
