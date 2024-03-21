import React from "react";
import CloseIcon from "./../assets/icon-close.svg";

const Aside = ({ isOpen, handleMenuClick }) => {
  const position = isOpen
    ? "animate-openmenu"
    : "animate-closemenu left-[-300px]";

  return (
    <aside
      className={`hidden mobile:block 
      p-5 border-r-2 bg-darkGrayishBlue w-2/3 absolute h-screen top-0 z-20 ${position}`}
    >
      <img src={CloseIcon} className='pb-10' onClick={handleMenuClick} />
      <ul className=''>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
};

export default Aside;
