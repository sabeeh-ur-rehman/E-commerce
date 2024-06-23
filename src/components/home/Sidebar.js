import React, { useState, useRef, useEffect } from "react";
import Carousel from "./Carousel"

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
      <section className="relative border-r-2 border-gray w-[20%]">
        <div ref={dropdownRef}>
          <ul className="px-8 py-3 flex flex-col gap-4 w-64 font-poppins font-normal text-base">
            <li className="relative">
              <div
                className="list-none cursor-pointer"
                onClick={() => toggleDropdown("womensFashion")}
              >
                Woman’s Fashion
              </div>
              {openDropdown === "womensFashion" && (
                <div className="absolute left-44 top-0 mt-2 bg-Text border border-gray-200 rounded shadow-md">
                  <p className="cursor-pointer px-4 py-2">Dress</p>
                  <p className="cursor-pointer px-4 py-2">Shirts</p>
                </div>
              )}
            </li>
            <li className="relative">
              <div
                className="list-none cursor-pointer"
                onClick={() => toggleDropdown("mensFashion")}
              >
                Men’s Fashion
              </div>
              {openDropdown === "mensFashion" && (
                <div className="absolute left-44 top-0 mt-2 bg-Text border border-gray-200 rounded shadow-md">
                  <p className="cursor-pointer px-4 py-2">Dress</p>
                  <p className="cursor-pointer px-4 py-2">Shirts</p>
                </div>
              )}
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
      </section>
      <Carousel/>
    </div>
  );
};

export default Sidebar;
