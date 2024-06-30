// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

import image1 from "../assets/search-icon.svg";
import image2 from "../assets/Cart1.svg";
import image3 from "../assets/wish-list.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist);
  const user = useSelector((state) => state.auth.user);
  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalWishlistItems = wishlistItems.length;

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="border-b-2 border-gray">
      {/* Header */}
      <div className="bg-Button flex items-center justify-center py-3">
        <h1 className="text-Text max-md:text-sm text-center flex items-center max-md:flex-col gap-2">
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
        <div className="lg:hidden">
          <button onClick={handleMenuClick}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`lg:flex hidden items-center gap-12 font-poppins font-normal text-base`}>
          <Link to="/" className="cursor-pointer" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/Contact" className="cursor-pointer" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/About" className="cursor-pointer" onClick={closeMenu}>
            About
          </Link>
          <Link to="/SignUp" className="cursor-pointer" onClick={closeMenu}>
            Sign Up
          </Link>
          <li className="flex items-center justify-center">
            <img className="cursor-pointer w-6" src={image1} />
          </li>
          {user && (
            <>
              <li className="flex items-center justify-center relative">
              <Link to="/cart"><img className="cursor-pointer w-6" src={image2} /></Link> 
                {totalCartItems > 0 && (
                  <span className="bg-Secondary2 flex items-center justify-center rounded-full w-4 h-4 absolute top-[-10px] right-[-10px] text-xs text-Text">
                    {totalCartItems}
                  </span>
                )}
              </li>
              <li className="flex items-center justify-center relative">
               <Link to="/wishlist"> <img className="cursor-pointer w-6" src={image3} /></Link>
                {totalWishlistItems > 0 && (
                  <span className="bg-Secondary2 flex items-center justify-center rounded-full w-4 h-4 absolute top-[-10px] right-[-10px] text-xs text-Text">
                    {totalWishlistItems}
                  </span>
                )}
              </li>
            </>
          )}
        </ul>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white w-full py-10">
          <Link to="/" className="cursor-pointer py-2" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/Contact" className="cursor-pointer py-2" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/About" className="cursor-pointer py-2" onClick={closeMenu}>
            About
          </Link>
          <Link to="/SignUp" className="cursor-pointer py-2" onClick={closeMenu}>
            Sign Up
          </Link>
          {user && (
            <>
              <li className="flex items-center justify-center relative">
              <Link to="/cart"><img className="cursor-pointer w-6" src={image2} onClick={closeMenu} /></Link> 
                {totalCartItems > 0 && (
                  <span className="bg-Secondary2 flex items-center justify-center rounded-full w-4 h-4 absolute top-[-10px] right-[-10px] text-xs text-Text">
                    {totalCartItems}
                  </span>
                )}
              </li>
              <li className="flex items-center justify-center relative">
               <Link to="/wishlist"> <img className="cursor-pointer w-6" src={image3} onClick={closeMenu} /></Link>
                {totalWishlistItems > 0 && (
                  <span className="bg-Secondary2 flex items-center justify-center rounded-full w-4 h-4 absolute top-[-10px] right-[-10px] text-xs text-Text">
                    {totalWishlistItems}
                  </span>
                )}
              </li>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
