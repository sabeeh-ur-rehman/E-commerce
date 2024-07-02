import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, clearCart } from "../../redux/cartSlice";
import Button from "../button/Button";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { slugify } from "../../utils/slugify.js";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const location = useLocation();

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleProceedToCheckout = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/create-checkout-session", {
        items: cartItems,
      });
      console.log("Checkout session response:", response.data);
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error creating Checkout Session:", error);
      toast.error("Failed to redirect to checkout");
    }
  };

  return (
    <>
      <div className="p-14 w-full">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        {cartItems.length > 0 ? (
          <>
            <table className="w-full text-left">
              <thead>
                <tr className="shadow-md">
                  <th className="p-2 w-[55%]">Product</th>
                  <th className="p-2 w-[15%]">Price</th>
                  <th className="p-2 w-[15%]">Quantity</th>
                  <th className="p-2 w-[15%]">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="shadow-md mb-8 rounded-lg">
                    <Link to={`/product/${item.id}/${slugify(item.title)}`} > <td className="p-4 flex items-center">
                      <img
                        src={item.imageURL}
                        alt={item.title}
                        className="w-14 h-14 object-contain rounded-md mr-4"
                      />
                      <div>{item.title}</div>
                    </td> </Link>
                    <td className="p-4">${item.price}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Button
                          className="Secondary2 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
                          onClick={() =>
                            dispatch(decreaseQuantity({ id: item.id }))
                          }
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          className="Secondary2 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
                          onClick={() =>
                            dispatch(increaseQuantity({ id: item.id }))
                          }
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td className="p-4 font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className="p-10 flex items-center justify-center font-bold text-4xl font-poppins capitalize">
            Your cart is empty
          </div>
        )}
      </div>
      <div className="p-14">
        <Link to="../">
          <Button className="bg-Secondary2 text-Text">Return To Shop</Button>
        </Link>
      </div>
      <div className="p-14 mb-5 py-4 flex justify-end w-full">
        <div className="border border-Text2 p-4 flex flex-col gap-4 rounded">
          <h1 className="font-poppins font-bold text-xl">Cart Total</h1>
          <div className="text-lg font-medium flex justify-between border-b border-gray">
            <label>Subtotal: </label>
            <p>${getTotalPrice()}</p>
          </div>
          <div className="text-lg font-medium flex justify-between border-b border-gray">
            <label>Shipping</label>
            <p>Free</p>
          </div>
          <div className="text-lg font-medium flex justify-between border-b border-gray">
            <label>Total: </label>
            <p>${getTotalPrice()}</p>
          </div>
          <Button className="bg-Secondary2 text-Text" onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
