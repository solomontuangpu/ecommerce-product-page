import React from "react";

const TransparentScreen = ({ isOpen }) => {
  const display = isOpen ? "block" : "hidden";
  return (
    <div
      className={`${display} delay-700 bg-lightBg bg-opacity-75 fixed top-0 left-0 right-0 h-screen w-screen z-10`}
    ></div>
  );
};

export default TransparentScreen;
