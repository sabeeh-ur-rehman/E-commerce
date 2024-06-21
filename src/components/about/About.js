import React from "react";
import twogirls from "../../assets/about/two-girls.svg";
import seller from "../../assets/about/seller.svg";
import sale from "../../assets/about/Icon-Sale.svg";
import money from "../../assets/about/Icon-Moneybag.svg"
import tom from "../../assets/about/tom cruise.svg";
import emma from "../../assets/about/ema watson.svg";
import will from "../../assets/about/will smith.svg";
import truck from "../../assets/about/icon-delivery.svg"
import service from "../../assets/about/Icon-Customer service.svg"
import secure from "../../assets/about/Icon-secure.svg"

const About = () => {
  return (
    <section className="p-8">
      {/* story  */}
      <div className="flex justify-around items-center">
        <div className="w-[40%] flex flex-col gap-10">
          <h1 className="font-poppins text-6xl leading-[64px] font-semibold">
            Our Story
          </h1>
          <p className="font-poppins font-normal text-base">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="font-poppins font-normal text-base">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={twogirls} />
      </div>

      {/* small card tags  */}
      <div className="flex flex-wrap gap-2 justify-around px-8 py-10">
        <div className="flex flex-col items-center gap-4 border hover:bg-Secondary2 hover:text-Text hover:border-Secondary2 border-gray py-4 px-8">
          <div className="w-14 h-14 flex items-center justify-center p-2 bg-Button border-8 border-gray rounded-full">
            <img className="fill-Text" src={seller} />
          </div>
          <h1 className="font-poppins font-bold text-4xl leading-8">10.5k</h1>
          <p className="font-poppins font-normal text-base leading-6">
            Sallers active our site
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 border hover:bg-Secondary2 hover:text-Text hover:border-Secondary2 border-gray py-4 px-8">
          <div className="w-14 h-14 flex items-center justify-center p-2 bg-Button border-8 border-gray rounded-full">
            <img className="fill-Text" src={sale} />
          </div>
          <h1 className="font-poppins font-bold text-4xl leading-8">33k</h1>
          <p className="font-poppins font-normal text-base leading-6">
            Mopnthly Product Sale
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 border hover:bg-Secondary2 hover:text-Text hover:border-Secondary2 border-gray py-4 px-8">
          <div className="w-14 h-14 flex items-center justify-center p-2 bg-Button border-8 border-gray rounded-full">
            <img className="fill-Text" src={seller} />
          </div>
          <h1 className="font-poppins font-bold text-4xl leading-8">10.5k</h1>
          <p className="font-poppins font-normal text-base leading-6">
            Sallers active our site
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 border hover:bg-Secondary2 hover:text-Text hover:border-Secondary2 border-gray py-4 px-8">
          <div className="w-14 h-14 flex items-center justify-center p-2 bg-Button border-8 border-gray rounded-full">
            <img className="fill-Text" src={money} />
          </div>
          <h1 className="font-poppins font-bold text-4xl leading-8">25k</h1>
          <p className="font-poppins font-normal text-base leading-6">
          Anual gross sale in our site
          </p>
        </div>
      </div>

      {/* Team  */}
      <div className="flex justify-around py-10 flex-wrap">
        <div>
          <img src={tom} />
          <div className="py-5">
            <h3 className="font-poppins font-medium text-3xl leading-8 py-3">
              Tom Cruise
            </h3>
            <p className="font-poppins font-normal text-base leading-6">
              Founder & Chairman
            </p>
          </div>
        </div>
        <div>
          <img src={emma} />
          <div className="py-5">
            <h3 className="font-poppins font-medium text-3xl leading-8 py-3">
              Emma Watson
            </h3>
            <p className="font-poppins font-normal text-base leading-6">
              Managing Director
            </p>
          </div>
        </div>
        <div>
          <img src={will} />
          <div className="py-5">
            <h3 className="font-poppins font-medium text-3xl leading-8 py-3">
              Will Smith
            </h3>
            <p className="font-poppins font-normal text-base leading-6">
              Product Designer
            </p>
          </div>
        </div>
      </div>

      {/* small card tags  */}
      <div className='flex flex-wrap gap-2 justify-around px-8 py-10'>
         <div className='flex flex-col items-center gap-4 py-4 px-8'>
          <div className='w-20 h-20 flex items-center justify-center p-2 bg-Button border-8 border-gray rounded-full'>
            <img  className='fill-Text' src={truck}/>
          </div>
          <h1 className='font-poppins font-bold text-4xl leading-8'>FREE AND FAST DELIVERY</h1>
          <p className='font-poppins font-normal text-base leading-6'>Free delivery for all orders over $140</p>
         </div>
         <div className='flex flex-col items-center gap-4 py-4 px-8'>
          <div className='w-20 h-20 flex items-center justify-center p-2 bg-Button border-8 border-gray rounded-full'>
            <img  className='fill-Text' src={service}/>
          </div>
          <h1 className='font-poppins font-bold text-4xl leading-8'>24/7 CUSTOMER SERVICE</h1>
          <p className='font-poppins font-normal text-base leading-6'>Friendly 24/7 customer support</p>
         </div>
         <div className='flex flex-col items-center gap-4 py-4 px-8'>
          <div className='w-20 h-20 flex items-center justify-center p-2 bg-Button border-8 border-gray rounded-full'>
            <img  className='fill-Text' src={secure}/>
          </div>
          <h1 className='font-poppins font-bold text-4xl leading-8'>MONEY BACK GUARANTEE</h1>
          <p className='font-poppins font-normal text-base leading-6'>We reurn money within 30 days</p>
         </div>
      </div>
    </section>
  );
};

export default About;
