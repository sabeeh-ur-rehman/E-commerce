import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import image1 from "../assets/search-icon.svg";
import image2 from "../assets/Cart1.svg";
import image3 from "../assets/wish-list.svg";

const Header = () => {
  // Get the total quantity of items in the cart from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="border-b-2 border-gray">
      {/* Header */}
      <div className="bg-Button flex items-center justify-center py-3">
        <h1 className="text-Text flex items-center gap-2">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to="/">
            <span className="underline cursor-pointer">ShopNow</span>
          </Link>
        </h1>
      </div>
      {/* Navbar */}
      <div className="flex items-center justify-between p-10">
        <Link to="/">
          <h1 className="text-text2 font-bold font-poppins text-2xl">
            Exclusive
          </h1>
        </Link>
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
          <Link to="/cart" className="relative">
            <img className="cursor-pointer" src={image2} alt="cart-icon" />
            <span className="absolute top-0 right-0 flex items-center justify-center h-5 w-5 bg-Secondary2 text-Text rounded-full text-xs">
              {totalItems}
            </span>
          </Link>
          <Link to="/wishlist">
            <img className="cursor-pointer" src={image3} alt="wishlist-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
