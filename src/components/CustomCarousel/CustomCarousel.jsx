import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const CustomCarousel = ({ children, showArrows = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = React.Children.count(children);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
  };

  const navigateToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full h-full flex-none">
            {child}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-opacity disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
          >
            <ChevronLeftIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-opacity disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
          >
            <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {Array.from({ length }).map((_, i) => (
          <span
            key={i}
            className={`block h-3 w-3 cursor-pointer rounded-full transition-colors ${activeIndex === i ? 'bg-mainClr' : 'bg-gray-200'}`}
            onClick={() => navigateToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
