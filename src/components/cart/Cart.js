import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../redux/cartSlice";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="p-8 w-full">
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
                    <td className="p-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 object-contain rounded-md mr-4"
                      />
                      <div>{item.title}</div>
                    </td>
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
          <p className="text-center text-Text2">Your cart is empty</p>
        )}
      </div>
      <div className="p-8">
        <Link to="../">
          {" "}
          <Button className="bg-Secondary2 text-Text">
            Return To Shop
          </Button>{" "}
        </Link>
      </div>
      <div className="px-8 mb-5 py-4 flex justify-end w-full">
        <div className="border border-Text2 p-4 flex flex-col gap-4 rounded">
          <h1 className="font-poppins font-bold text-xl">Cart Total</h1>
          <div className="text-lg font-medium flex justify-between border-b border-gray">
                   <label>Subtotal: </label><p>${getTotalPrice()}</p>
          </div>
          <div className="text-lg font-medium flex justify-between border-b border-gray">
                   <label>Shipping</label><p>Free</p>
          </div>
          <div className="text-lg font-medium flex justify-between border-b border-gray">
                   <label>Total: </label><p>${getTotalPrice()}</p>
          </div>
          <Button className="bg-Secondary2 text-Text">Procees to checkout</Button>
        </div>
      </div>
    </>
  );
};

export default Cart;