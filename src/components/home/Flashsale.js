import React from "react";
import Countdown from "./Countdown";
import Productslider from "./Productslider";
import Button from "../button/Button.js";
import { Link } from "react-router-dom";

const Flashsale = () => {
  return (
    <>
      <div className="flex items-center gap-8 p-8">
        <div className="w-8 h-16 bg-Secondary2 rounded">
          <ul>
            <li></li>
          </ul>
        </div>
        <h1 className="font-poppins text-base font-semibold text-Secondary2">
          Today’s
        </h1>
      </div>
      <section className="flex items-end max-md:flex-col max-md:items-center gap-10 p-8">
        <h1 className="font-poppins font-semibold text-4xl max-md:text-lg max-sm:text-base">Flash Sales</h1>
        <Countdown />
      </section>
      <div>
        <Productslider />
      </div>
      <div className="flex items-center justify-center w-full p-8">
        <Link to="Allproducts"> <Button className="bg-Secondary2 text-Text">View All Products</Button> </Link>
      </div>
    </>
  );
};

export default Flashsale;
