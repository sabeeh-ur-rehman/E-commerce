import React from "react";
import Button from "../button/Button.js";
import img from "../../assets/Side Image.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[55%]">
        <img src={img} />
      </div>
      <section className="flex flex-col justify-center gap-4 w-[45%] p-20">
        <h1 className="font-poppins font-medium text-3xl">Create an account</h1>
        <p className="font-poppins font-normal text-sm">Enter your details below</p>
        <form className="flex flex-col gap-4">
          <input className="py-2 border-b border-gray outline-none" type="text" placeholder="Name" />
          <input className="py-2 border-b border-gray outline-none" type="text" placeholder="Email or Phone Number" />
          <input className="py-2 border-b border-gray outline-none" type="password" placeholder="Password" />
          <Button className='bg-Secondary2 text-Text'>Create Account</Button>
          <p className="text-gray">
            Already have account?  <Link to="/Login"><span className="underline underline-offset-8">Log in</span></Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Signup;
