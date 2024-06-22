import React from 'react'
import Button from "../button/Button.js";
import img from "../../assets/Side Image.svg";

const Login = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[55%]">
        <img src={img} />
      </div>
      <section className="flex flex-col justify-center gap-4 w-[45%] p-20">
        <h1 className="font-poppins font-medium text-3xl">Log in to Exclusive</h1>
        <p className="font-poppins font-normal text-sm">Enter your details below</p>
        <form className="flex flex-col gap-4">
          <input className="py-2 border-b border-gray outline-none" type="text" placeholder="Email or Phone Number" />
          <input className="py-2 border-b border-gray outline-none" type="password" placeholder="Password" />
          <Button>Log In</Button>
        </form>
      </section>
    </div>
  )
}

export default Login