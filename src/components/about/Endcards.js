import React from 'react'
import truck from "../../assets/about/icon-delivery.svg"
import service from "../../assets/about/Icon-Customer service.svg"
import secure from "../../assets/about/Icon-secure.svg"

const Endcards = () => {
  return (
    <div className='flex flex-wrap gap-2 justify-around px-8 py-10'>
         <div className='flex flex-col items-center gap-4 py-4 px-8'>
          <div className='w-20 h-20 flex items-center justify-center p-2 bg-Button border-8 border-gray rounded-full'>
            <img  className='fill-Text' src={truck}/>
          </div>
          <h1 className='font-poppins font-bold text-2xl leading-8'>FREE AND FAST DELIVERY</h1>
          <p className='font-poppins font-normal text-sm leading-6'>Free delivery for all orders over $140</p>
         </div>
         <div className='flex flex-col items-center gap-4 py-4 px-8'>
          <div className='w-20 h-20 flex items-center justify-center p-2 bg-Button border-8 border-gray rounded-full'>
            <img  className='fill-Text' src={service}/>
          </div>
          <h1 className='font-poppins font-bold text-2xl leading-8'>24/7 CUSTOMER SERVICE</h1>
          <p className='font-poppins font-normal text-sm leading-6'>Friendly 24/7 customer support</p>
         </div>
         <div className='flex flex-col items-center gap-4 py-4 px-8'>
          <div className='w-20 h-20 flex items-center justify-center p-2 bg-Button border-8 border-gray rounded-full'>
            <img  className='fill-Text' src={secure}/>
          </div>
          <h1 className='font-poppins font-bold text-2xl leading-8'>MONEY BACK GUARANTEE</h1>
          <p className='font-poppins font-normal text-sm leading-6'>We reurn money within 30 days</p>
         </div>
      </div>
  )
}

export default Endcards