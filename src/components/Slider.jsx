import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative mx-auto w-1/2 h-96 overflow-hidden mb-16">
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={goToPrevious}>
        <IoIosArrowBack size={24} />
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={goToNext}>
        <IoIosArrowForward size={24} />
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="mx-auto h-full"
        style={{ objectFit: 'contain' }} 
      />
    </div>
  );
};

export default Slider;
