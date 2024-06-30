import React, { useState, useRef, useEffect } from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="flex">
      <section className="max-md:hidden w-[20%]">
        <ul className="px-8 py-3 flex flex-col border-r-2 border-gray      gap-4 w-64 font-poppins font-normal text-base">
          <Link to="/Allproducts">
            <li>Men's Fashion</li>
          </Link>
          <Link to="/Allproducts">
            <li>Women's Fashion</li>
          </Link>
          <Link to="/Allproducts">
            <li>Electronics</li>
          </Link>
          <Link to="/Allproducts">
            <li>Home & Lifestyle</li>
          </Link>
          <Link to="/Allproducts">
            <li>Medicine</li>
          </Link>
          <Link to="/Allproducts">
            <li>Sports & Outdoor</li>
          </Link>
          <Link to="/Allproducts">
            <li>Baby’s & Toys</li>
          </Link>
          <Link to="/Allproducts">
            <li>Groceries & Pets</li>
          </Link>
          <Link to="/Allproducts">
            <li>Health & Beauty</li>
          </Link>
        </ul>
      </section>
      <Carousel />
    </div>
  );
};

export default Sidebar;
