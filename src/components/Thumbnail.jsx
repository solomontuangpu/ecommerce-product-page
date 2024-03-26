import React, { useRef, useState } from "react";
import { thumbnails } from "../assets/data/imageData";

const Thumbnail = ({ handleChange }) => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const thumbnailRefs = useRef([]);

  function handleClick(index) {
    // Focus the thumbnail when clicked
    thumbnailRefs.current[index].focus();
    // Update the focused index state
    setFocusedIndex(index);
    handleChange(index);
  }

  return (
    <div className='mobile:hidden flex justify-between py-10'>
      {thumbnails.map((path, index) => (
        <div
          key={index}
          tabIndex={focusedIndex === index ? 0 : -1} // Make thumbnail focusable when it's focused
          ref={(el) => (thumbnailRefs.current[index] = el)} // Assign ref to each thumbnail element
          className=' border-opacity-0 border-lightGrayishBlue border-[5px] cursor-pointer focus:border-orange focus:opacity-70 focus:border-[3px] focus:rounded-2xl h-24'
          onClick={() => handleClick(index)} // Pass index to handleClick function
        >
          <img
            src={path}
            className='rounded-xl h-24 hover:opacity-60'
            alt={`Thumbnail ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
