import React, { useRef, useState } from "react";
import Thumbnail from "./Thumbnail";

import NextIcon from "./../assets/icon-next.svg";
import PreviousIcon from "./../assets/icon-previous.svg";

import Image1 from "/images/image-product-1.jpg";
import Image2 from "/images/image-product-2.jpg";
import Image3 from "/images/image-product-3.jpg";
import Image4 from "/images/image-product-4.jpg";

const mainImage = [Image1, Image2, Image3, Image4];

export default function ProductImage() {
  const [imageIndex, setImageIndex] = useState(0);
  const handleChange = (index) => {
    setImageIndex(index);
  };

  const handleNavImageButton = (index, direction) => {
    while(index >= 0 && index < 4){
      switch(direction){
        case "next" : 
        if(index == 3 ) return;
          return setImageIndex(prev => prev +1);
        case "previous":
          if(index == 0) return;
          return setImageIndex((prev) => prev - 1);
        default:
          return;
      }
    }
  };

  return (
    <div className='mobile:w-full mobile:h-[300px] w-[500px] relative'>
      <img
        src={mainImage[imageIndex]}
        className='mobile:rounded-none mobile:w-full mobile:object-cover mobile:h-full rounded-2xl'
      />

      <button
        className='mobile:flex mobile: justify-center mobile:items-center hidden bg-white w-10 h-10 rounded-full absolute top-[8rem] right-4'
        onClick={() => handleNavImageButton(imageIndex, "next")}
      >
        <img src={NextIcon} alt='' />
      </button>

      <button
        className='mobile:flex mobile: justify-center mobile:items-center hidden bg-white w-10 h-10 rounded-full absolute top-[8rem] left-4'
        onClick={() => handleNavImageButton(imageIndex, "previous")}
      >
        <img src={PreviousIcon} alt='' />
      </button>

      <Thumbnail handleChange={handleChange} />
    </div>
  );
}
