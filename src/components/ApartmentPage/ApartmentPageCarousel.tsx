import { Carousel } from 'react-responsive-carousel';
import React from 'react';

export const ApartmentPageCarousel = ({ photos }) => {
  return (
    <Carousel
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(clickHandler: () => void, hasPrev: boolean, label: string) => (
        <button
          type="button"
          className="absolute top-[45%] left-4 bg-white bg-opacity-50 rounded-full w-[55px] h-[55px] z-[300] flex items-center justify-center"
          onClick={clickHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="30"
            viewBox="0 0 15 30"
            fill="none"
          >
            <path
              d="M14.534 26.0184L6.47607 14.9995L14.534 3.98085C15.4141 2.77678 15.011 1.17629 13.6329 0.407305C12.2543 -0.362019 10.4233 -0.0094615 9.54264 1.19461L0.465981 13.6068C0.15524 14.0315 -9.53674e-07 14.5159 -9.53674e-07 14.9999C-9.53674e-07 15.484 0.155175 15.9683 0.465981 16.393L9.54264 28.8053C10.4232 30.0093 12.2547 30.3622 13.6329 29.5925C15.0114 28.8225 15.4138 27.2227 14.534 26.0184Z"
              fill="black"
              fill-opacity="0.5"
            />
          </svg>
        </button>
      )}
      renderArrowNext={(clickHandler: () => void, hasPrev: boolean, label: string) => (
        <button
          type="button"
          className="absolute top-[45%] right-4 bg-white bg-opacity-50 rounded-full w-[55px] h-[55px] z-[300] flex items-center justify-center"
          onClick={clickHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="30"
            viewBox="0 0 15 30"
            fill="none"
          >
            <path
              d="M0.466015 3.98165L8.52393 15.0005L0.466015 26.0191C-0.414138 27.2232 -0.0110005 28.8237 1.36714 29.5927C2.74567 30.362 4.57669 30.0095 5.45736 28.8054L14.534 16.3932C14.8448 15.9685 15 15.4841 15 15.0001C15 14.516 14.8448 14.0317 14.534 13.607L5.45736 1.19473C4.57675 -0.00928688 2.74528 -0.362234 1.36714 0.407484C-0.0113877 1.17748 -0.413751 2.77729 0.466015 3.98165Z"
              fill="black"
              fill-opacity="0.5"
            />
          </svg>
        </button>
      )}
    >
      {photos.map((photo) => {
        return (
          <div className="h-[650px]">
            <img src={photo.filename} className="h-full object-cover" />
          </div>
        );
      })}
    </Carousel>
  );
};
