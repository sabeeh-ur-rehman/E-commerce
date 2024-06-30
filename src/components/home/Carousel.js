import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import iPhone from "../../assets/slide/iphone.svg";
import apple from "../../assets/slide/apple-logo.svg";
import arrow from "../../assets/slide/arrow.svg";

const Slider = () => {
  return (
    <Carousel transitionTime={1000} interval={2000} autoPlay infiniteLoop showArrows={false} showThumbs={false} showStatus={false} className="px-8 py-2 w-[80%] max-md:w-full">
      <div className="bg-Button flex items-center justify-between p-8 max-md:p-0  w-full">
        <div className="w-full m-10  flex flex-col justify-start items-start gap-8">
          <h1 className="text-Text  w-max flex items-center gap-4 font-poppins font-normal text-base">
            <span>
              <img className="w-[300px] max-md:h-9 " src={apple} />
            </span>
            iPhone 14 Series
          </h1>
          <h1 className="font-poppins font-semibold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg text-Text">
            Up to 10% off Voucher
          </h1>
          <h1 className="text-Text flex items-center gap-2 font-poppins font-medium text-base max-md:text-xs ">Shop Now <span><img src={arrow}/></span></h1>
        </div>
        <img className="w-full max-md:w-32 max-md:h-32" src={iPhone} />
      </div>
     
    
    
    
    </Carousel>
  );
};

export default Slider;
