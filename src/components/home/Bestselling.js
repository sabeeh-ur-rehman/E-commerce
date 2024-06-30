import React from "react";
import Productcard from "./Productcard";
import Button from "../button/Button";
import jbl from "../../assets/JBL.svg";

const Bestselling = () => {
  return (
    <>
      <div className="flex items-center gap-8 p-8">
        <div className="w-8 h-16 bg-Secondary2 rounded">
          <ul>
            <li></li>
          </ul>
        </div>
        <h1 className="font-poppins text-base font-semibold text-Secondary2">
          This Month
        </h1>
      </div>
      <section className="flex items-end gap-10 p-8">
        <h1 className="font-poppins font-semibold text-4xl">
          Best Selling Products
        </h1>
      </section>
      <div className="p-8">
        <Productcard startId={11} endId={15} />
      </div>
      <div className="p-8">
        <div className="bg-Text2 flex items-center justify-around p-8 py-16">
          <div className="flex flex-col gap-8">
            <p className="text-Button1 text-base">Catogries</p>
            <h1 className="font-poppins font-semibold text-4xl max-md:text-lg max-sm:text-base text-Text">Enhance Your Music Experience</h1>
            <div>
            <Button className="bg-Button1 text-Text">Buy Now!</Button>

            </div>
          </div>
          <img className="max-md:hidden" src={jbl} />
        </div>
      </div>
    </>
  );
};

export default Bestselling;
