import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import Button from "../button/Button.js";
import img from "../../assets/Side Image.svg";
import { signInWithEmail } from '../../redux/loginSlice';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { user, error } = useSelector((state) => state.auth);

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    setEmailLoading(true);
    dispatch(signInWithEmail({ email, password }))
      .finally(() => setEmailLoading(false));
      
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    setGoogleLoading(true);
    dispatch(signInWithGoogle())
      .finally(() => setGoogleLoading(false));
  };

  // Use useEffect to check if the user is logged in and redirect
  useEffect(() => {
    if (user) {
      navigate('/'); // Redirect to home page
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-between">
      <div className="w-[55%]">
        <img src={img} alt="Side" />
      </div>
      <section className="flex flex-col justify-center gap-4 w-[45%] p-20">
        <h1 className="font-poppins font-medium text-3xl">Log in to Exclusive</h1>
        <p className="font-poppins font-normal text-sm">Enter your details below</p>

        <form className="flex flex-col gap-4">
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
          <Button onClick={handleEmailSignIn} type="submit" className='bg-Secondary2 text-Text'>
            {emailLoading ? 'Logging in...' : 'Log In'}
          </Button>
          {/* <Button onClick={handleGoogleSignIn} type="submit" className='bg-Secondary2 text-Text'>
            {googleLoading ? 'Logging in...' : 'Log In with Google'}
          </Button> */}
          {error && <p className="text-Secondary2">{error}</p>}
        </form>
      </section>
    </div>
  );
};

export default Login;
