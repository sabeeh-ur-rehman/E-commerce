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
          <div className="flex items-center gap-2 max-md:hidden py-2 px-3 bg-Secondary rounded">
            <input
              className="outline-none bg-Secondary"
              placeholder="What are you looking?"
              type="search"
            />
            <img className="cursor-pointer" src={image1} alt="search-icon" />
          </div>
          <Link to="/cart" className="relative" onClick={closeMenu}>
            <img className="cursor-pointer" src={image2} alt="cart-icon" />
            <span className="absolute top-0 right-0 flex items-center justify-center h-5 w-5 bg-Secondary2 text-Text rounded-full text-xs">
              {totalCartItems}
            </span>
          </Link>
          <Link to="/wishlist" className="relative" onClick={closeMenu}>
            <img className="cursor-pointer" src={image3} alt="wishlist-icon" />
            <span className="absolute bottom-1 left-2 flex items-center justify-center h-5 w-5 bg-Secondary2 text-Text rounded-full text-xs">
              {totalWishlistItems}
            </span>
          </Link>
        </ul>
      </div>
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 py-2 lg:hidden">
          <div className="flex items-center gap-2 py-2 px-3 bg-Secondary rounded">
            <input
              className="outline-none bg-Secondary"
              placeholder="What are you looking?"
              type="search"
            />
            <img className="cursor-pointer" src={image1} alt="search-icon" />
          </div>
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
          
          <Link to="/cart" className="relative" onClick={closeMenu}>
            <img className="cursor-pointer" src={image2} alt="cart-icon" />
            <span className="absolute top-0 right-0 flex items-center justify-center h-5 w-5 bg-Secondary2 text-Text rounded-full text-xs">
              {totalCartItems}
            </span>
          </Link>
          <Link to="/wishlist" className="relative" onClick={closeMenu}>
            <img className="cursor-pointer" src={image3} alt="wishlist-icon" />
            <span className="absolute bottom-1 left-2 flex items-center justify-center h-5 w-5 bg-Secondary2 text-Text rounded-full text-xs">
              {totalWishlistItems}
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
