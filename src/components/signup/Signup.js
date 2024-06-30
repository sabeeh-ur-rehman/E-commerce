// src/components/Signup.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../../redux/loginSlice';
import Button from '../button/Button.js';
import img from '../../assets/Side Image.svg';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp({ email, password }));
  };

  

  return (
    <div className="flex justify-between">
      <div className="w-[55%]">
        <img src={img} alt="Side" />
      </div>
      <section className="flex flex-col justify-center gap-4 w-[45%] p-20">
        <h1 className="font-poppins font-medium text-3xl">Create an account</h1>
        <p className="font-poppins font-normal text-sm">Enter your details below</p>
        <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="py-2 border-b border-gray outline-none"
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="py-2 border-b border-gray outline-none"
            type="password"
            placeholder="Password"
          />
          <Button type="submit" className='bg-Secondary2 text-Text'>
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
          {error && <p className="text-Secondary2">{error}</p>}
          <p className="text-gray">
            Already have an account? <Link to="/Login"><span className="underline underline-offset-8">Log in</span></Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Signup;
