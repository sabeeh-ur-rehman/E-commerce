import React from "react";
import Productcard from "./Productcard";

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
        <h1 className="font-poppins font-semibold text-4xl">Best Selling Products</h1>
      </section>
      <div className="p-8">
        <Productcard startId={11} endId={15} />
      </div>
    </>
  );
};

export default Bestselling;
