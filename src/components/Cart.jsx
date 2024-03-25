import React from "react";

const Cart = ({ isCartOpen }) => {
  return (
    <div
      className={` ${
        isCartOpen ? "" : "hidden"
      } w-[350px] mobile:w-[400px] bg-white shadow-lg rounded-lg absolute top-[6rem] mobile:right-[1rem] right-[5rem] z-40`}
    >
      <h3 className='font-bold p-5  border-b-grayishBlue border-b-[1px]'>
        Cart
      </h3>
      <div className='p-5'>
        <p className='text-center mobile:py-16 py-20 font-bold text-grayishBlue'>
          Your cart is empty.
        </p>
      </div>
    </div>
  );
};

export default Cart;
