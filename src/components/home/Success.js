import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartSlice'; 
import Button from "../button/Button.js"
import { Link } from 'react-router-dom';

const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="p-10 py-40 text-center leading-10 flex flex-col gap-6 items-center justify-center font-bold text-4xl font-poppins capitalize">
            Thank you for your order <br/>
            Happy Shopping
            <Link to="../">
          <Button className="bg-Secondary2 text-Text">Return To Shop</Button>
        </Link>
          </div>
  );
};

export default Success;
