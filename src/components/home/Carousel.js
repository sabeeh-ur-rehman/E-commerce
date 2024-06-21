import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import iPhone from "../../assets/slide/iphone.svg";
import apple from "../../assets/slide/apple-logo.svg";
import arrow from "../../assets/slide/arrow.svg";

const Slider = () => {
  return (
    <Carousel transitionTime={1000} interval={2000} autoPlay infiniteLoop showArrows={false} showThumbs={false} showStatus={false} className="px-8 py-2 w-[80%]">
      <div className="bg-Button flex items-center justify-between p-8 w-full h-max">
        <div className="w-full ml-10 flex flex-col justify-start items-start gap-8">
          <h1 className="text-Text  w-max flex items-center gap-4 font-poppins font-normal text-base">
            <span>
              <img className="w-[300px]" src={apple} />
            </span>
            iPhone 14 Series
          </h1>
          <h1 className="font-poppins font-semibold text-5xl text-Text">
            Up to 10% off Voucher
          </h1>
          <h1 className="text-Text flex items-center gap-2 font-poppins font-medium text-base ">Shop Now <span><img src={arrow}/></span></h1>
        </div>
        <img className="w-full" src={iPhone} />
      </div>
      <div className="bg-Button flex items-center justify-between p-8 w-full h-max">
        <div className="w-full ml-10 flex flex-col justify-start items-start gap-8">
          <h1 className="text-Text  w-max flex items-center gap-4 font-poppins font-normal text-base">
            <span>
              <img className="w-[300px]" src={apple} />
            </span>
            iPhone 14 Series
          </h1>
          <h1 className="font-poppins font-semibold text-5xl text-Text">
            Up to 10% off Voucher
          </h1>
          <h1 className="text-Text flex items-center gap-2 font-poppins font-medium text-base ">Shop Now <span><img src={arrow}/></span></h1>
        </div>
        <img className="w-full" src={iPhone} />
      </div>
      <div className="bg-Button flex items-center justify-between p-8 w-full h-max">
        <div className="w-full ml-10 flex flex-col justify-start items-start gap-8">
          <h1 className="text-Text  w-max flex items-center gap-4 font-poppins font-normal text-base">
            <span>
              <img className="w-[300px]" src={apple} />
            </span>
            iPhone 14 Series
          </h1>
          <h1 className="font-poppins font-semibold text-5xl text-Text">
            Up to 10% off Voucher
          </h1>
          <h1 className="text-Text flex items-center gap-2 font-poppins font-medium text-base ">Shop Now <span><img src={arrow}/></span></h1>
        </div>
        <img className="w-full" src={iPhone} />
      </div>
    
    
    </Carousel>
  );
};

export default Slider;
