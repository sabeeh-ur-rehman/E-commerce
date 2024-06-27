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
                  <Link to="/Allproducts">
                    {" "}
                    <p className="cursor-pointer px-4 py-2">Dress</p>{" "}
                  </Link>
                  <Link to="/Allproducts">
                    <p className="cursor-pointer px-4 py-2">Shirts</p>
                  </Link>
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
                  <Link to="/Allproducts">
                    <p className="cursor-pointer px-4 py-2">Dress</p>
                  </Link>
                  <Link to="/Allproducts">
                    <p className="cursor-pointer px-4 py-2">Shirts</p>
                  </Link>
                </div>
              )}
            </li>
            <Link to="/Allproducts">
              {" "}
              <li>Electronics</li>{" "}
            </Link>
            <Link to="/Allproducts">
              {" "}
              <li>Home & Lifestyle</li>{" "}
            </Link>
            <Link to="/Allproducts">
              {" "}
              <li>Medicine</li>{" "}
            </Link>
            <Link to="/Allproducts">
              {" "}
              <li>Sports & Outdoor</li>{" "}
            </Link>
            <Link to="/Allproducts">
              {" "}
              <li>Baby’s & Toys</li>{" "}
            </Link>
            <Link to="/Allproducts">
              {" "}
              <li>Groceries & Pets</li>{" "}
            </Link>
            <Link to="/Allproducts">
              {" "}
              <li>Health & Beauty</li>{" "}
            </Link>
          </ul>
        </div>
      </section>
      <Carousel />
    </div>
  );
};

export default Sidebar;
