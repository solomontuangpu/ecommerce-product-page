import React, { useReducer } from "react";

import MinusIcon from "./../assets/icon-minus.svg";
import PlusIcon from "./../assets/icon-plus.svg";

const initialState = {
  product: {
    price: 250.0,
    quantity: 0,
    discount: 50,
  },
  cart : []
};

const productReducer = ({product, cart}, action) => {
  switch(action.type){
    case "INCREASE_QUANTITY" : 
      return {product: { ...product, quantity: product.quantity++}, cart : [...cart] }
    default:
      return state;
  }
}


const ProductDescription = () => {
  const [ {product, cart}, dispatch ] = useReducer(productReducer, initialState);

  const discount = (percent) =>{
      return (product.price/100) * product.discount;
  }

  const discountPrice = discount(50);

  return (
    <div className='mobile:w-full mobile:mt-0 w-[500px] p-5 pb-5 mt-16'>
      <h3 className=' uppercase text-orange font-extrabold'>sneaker company</h3>
      <h1 className=' py-5 text-lightBg text-4xl font-extrabold'>
        Fall Limited Edition Sneakers
      </h1>
      <p className=' text-darkGrayishBlue pb-5 text-justify text-lg'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <div className='mobile:flex justify-between items-center'>
        <div className='flex'>
          <h3 className=' mobile:text-3xl text-2xl font-bold mr-5'>${discountPrice}</h3>
          <div className=' flex justify-center items-center bg-paleOrange text-orange rounded px-2'>
            <span className=' font-bold'>{product.discount}%</span>
          </div>
        </div>
        <p className='text-xl font-bold text-grayishBlue line-through'>
          ${product.price}
        </p>
      </div>
      <div className='flex mobile:flex-col mt-10 '>
        <div className=' mobile:w-full mobile:p-5 mobile:rounded-xl mobile:mb-2 flex justify-between mr-5 px-3 py-5 w-1/3 bg-lightGrayishBlue rounded-lg'>
          <button>
            <img src={MinusIcon} alt='' />
          </button>
          <p className='font-bold'>{product.quantity}</p>
          <button onClick={()=> dispatch({type: "INCREASE_QUANTITY"})}>
            <img src={PlusIcon} alt='' />
          </button>
        </div>
        <button className='mobile:w-full mobile:rounded-xl mobile:p-5 mobile:text-xl flex justify-center items-center py-5 bg-orange hover:bg-paleOrange text-white font-bold rounded-lg w-2/3'>
          {/* cart icon */}
          <svg
            className=' mr-5'
            width='22'
            height='20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
              className=' fill-white'
              fillRule='nonzero'
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
