import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../../redux/cartSlice';
import Button from '../button/Button';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <table className="w-full text-left">
            <thead>
              <tr className='shadow-md'>
                <th className="p-2">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="shadow-md mb-4 rounded-lg">
                  <td className="p-4 flex items-center">
                    <img src={item.image} alt={item.title} className="w-14 h-14 object-contain rounded-md mr-4" />
                    <div>{item.title}</div>
                  </td>
                  <td className="p-4">${item.price}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <Button className="Secondary2 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded" onClick={() => dispatch(decreaseQuantity({ id: item.id }))}>-</Button>
                      <span>{item.quantity}</span>
                      <Button className="Secondary2 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded" onClick={() => dispatch(increaseQuantity({ id: item.id }))}>+</Button>
                    </div>
                  </td>
                  <td className="p-4 font-bold">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-lg font-bold">
            <p>Total Price of Cart: ${getTotalPrice()}</p>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
