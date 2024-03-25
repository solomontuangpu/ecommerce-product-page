import React from "react";
import { CustomProductContext } from "../context/ProductContext";

const Cart = ({ isCartOpen }) => {
  const { cart } = CustomProductContext();
  console.log(cart);

  let cartContent;

  if (cart.length < 1) {
    cartContent = (
      <div className='p-5'>
        <p className='text-center mobile:py-16 py-20 font-bold text-grayishBlue'>
          Your cart is empty.
        </p>
      </div>
    );
  } else {
    cartContent = cart.map((product) => (
      <div key={product.id}>
        <h3>{product.title}</h3>
        <p>
          ${product.discountPrice} x {product.quantity} ={" "}
          <span className='font-bold'>${product.totalPrice}</span>
        </p>

        <button>Checkout</button>
      </div>
    ));
  }

  return (
    <div
      className={` ${
        isCartOpen ? "" : "hidden"
      } w-[350px] mobile:w-[400px] bg-white shadow-lg rounded-lg absolute top-[6rem] mobile:right-[1rem] right-[5rem] z-40`}
    >
      <h3 className='font-bold p-5  border-b-grayishBlue border-b-[1px]'>
        Cart
      </h3>
      {cartContent}
    </div>
  );
};

export default Cart;
