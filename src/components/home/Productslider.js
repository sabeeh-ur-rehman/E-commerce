import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Productcard from './Productcard';


const Productslider = () => {
  return (
    <Carousel transitionTime={2000} swipeable={true} emulateTouch={true} infiniteLoop interval={3000} showIndicators={false} stopOnHover={true} showThumbs={true} showStatus={false} className="px-8 cursor-pointer py-2 w-full">
     <Productcard startId={1} endId={5} />
     <Productcard startId={6} endId={10} />
     <Productcard startId={11} endId={15} />
     <Productcard startId={16} endId={20} />
  </Carousel>
  )
}

export default Productslider