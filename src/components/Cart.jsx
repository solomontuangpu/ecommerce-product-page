import React from "react";
import { CustomProductContext } from "../context/ProductContext";

import { thumbnails } from "../assets/data/imageData";
import DeleteIcon from "./../assets/icon-delete.svg";

const Cart = ({ isCartOpen }) => {
  const { cart, dispatch } = CustomProductContext();
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
      <div key={product.id} className='p-5'>
        <div className='flex justify-between items-center'>
          <img
            src={thumbnails[product.imageIndex]}
            className='w-16 rounded-lg'
          />
          <div>
            <h3 className='font-bold text-grayishBlue'>{product.title}</h3>
            <p className=" font-bold">
              ${product.discountPrice} x {product.quantity} ={" "}
              <span className='font-bolder'>${product.totalPrice}</span>
            </p>
          </div>
          <button
            onClick={()=> {
              dispatch({type: "REMOVE_FROM_CART", id:product.id})
            }}
          >
            <img src={DeleteIcon} />
          </button>
        </div>

        <button className=' bg-orange text-white font-bold w-full rounded-lg py-5 my-5'>
          Checkout
        </button>
      </div>
    ));
  }

  return (
    <div
      className={` ${
        isCartOpen ? "" : "hidden"
      } w-[400px] mobile:w-[400px] bg-white shadow-lg rounded-lg absolute top-[6rem] mobile:right-[1rem] right-[5rem] z-40`}
    >
      <h3 className='font-bold p-5  border-b-grayishBlue border-b-[1px]'>
        Cart
      </h3>
      {cartContent}
    </div>
  );
};

export default Cart;
