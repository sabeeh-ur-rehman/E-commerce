import React from "react";
import { Link } from "react-router-dom";

import image1 from "../assets/search-icon.svg";
import image2 from "../assets/Cart1.svg";
import image3 from "../assets/wish-list.svg";

const Header = () => {
  return (
    <div className=" border-b-2 border-gray">
      {/* Header  */}
      <div className="bg-Button flex items-center justify-center py-3">
        <h1 className="text-Text flex items-center gap-2">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="underline cursor-pointer">ShopNow</span>
        </h1>
      </div>
      {/* navbar  */}
      <div className="flex items-center justify-between  p-10">
        <Link to="/"><h1 className="text-text2 font-bold font-poppins  text-2xl">
          Exclusive
        </h1></Link>
        <ul className="flex items-center gap-12 font-poppins font-normal text-base">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <Link to="/Contact" className="cursor-pointer">
            Contact
          </Link>
          <Link to="/About" className="cursor-pointer">
            About
          </Link>
          <Link to="/SignUp" className="cursor-pointer">
            Sign Up
          </Link>
        </ul>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 py-2 px-3 bg-Secondary rounded">
            <input
              className="outline-none bg-Secondary"
              placeholder="What are you looking?"
              type="search"
            />
            <img className="cursor-pointer" src={image1} alt="search-icon" />
          </div>
          <Link to="/cart">
            <img className="cursor-pointer" src={image2} />
          </Link>
          <img className="cursor-pointer" src={image3} />
        </div>
      </div>
    </div>
  );
};

export default Header;
