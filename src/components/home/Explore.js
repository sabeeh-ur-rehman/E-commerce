import React from 'react'
import Productcard from "./Productcard";
import { Link } from 'react-router-dom';
import Button from '../button/Button';


const Explore = () => {
  return (
    <>
      <div className="flex items-center gap-8 p-8">
        <div className="w-8 h-16 bg-Secondary2 rounded">
          <ul>
            <li></li>
          </ul>
        </div>
        <h1 className="font-poppins text-base font-semibold text-Secondary2">
        Our Products
        </h1>
      </div>
      <section className="flex items-end gap-10 p-8">
        <h1 className="font-poppins font-semibold text-4xl">Explore Our Products</h1>
      </section>
      <div className="p-8">
        <Productcard startId={11} endId={20} />
      </div>
      <div className="flex items-center justify-center w-full p-8">
        <Link to="Allproducts"> <Button className="bg-Secondary2 text-Text">View All Products</Button> </Link>
      </div>
    </>
  )
}

export default Explore