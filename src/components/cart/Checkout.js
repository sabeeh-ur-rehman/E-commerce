import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderDetails, placeOrder } from "../../redux/checkoutslice.js";
import Button from "../button/Button.js";
import toast from "react-hot-toast";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  const orderDetails = useSelector((state) => state.checkout.orderDetails);
  const [formState, setFormState] = useState(orderDetails);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.firstName) newErrors.firstName = "First Name is required";
    if (!formState.streetAddress)
      newErrors.streetAddress = "Street Address is required";
    if (!formState.city) newErrors.city = "Town/City is required";
    if (!formState.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formState.email) newErrors.email = "Email Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setOrderDetails(formState));
      dispatch(placeOrder(formState));
      toast.success("Order placed successfully!");
    } else {
      toast.error("Please fill out all required fields.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-9 py-14 flex gap-14 justify-between"
    >
      <div className="w-1/2 mr-8">
        <h1 className="text-2xl font-medium mb-4">Billing Details</h1>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-gray font-medium">First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              className="w-full p-2 bg-Secondary outline-none rounded"
            />
            {errors.firstName && (
              <p className="text-Secondary2">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray font-medium">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formState.companyName}
              onChange={handleChange}
              className="w-full p-2 bg-Secondary outline-none rounded"
            />
          </div>
          <div>
            <label className="block text-gray font-medium">
              Street Address*
            </label>
            <input
              type="text"
              name="streetAddress"
              value={formState.streetAddress}
              onChange={handleChange}
              className="w-full p-2 bg-Secondary outline-none rounded"
            />
            {errors.streetAddress && (
              <p className="text-Secondary2">{errors.streetAddress}</p>
            )}
          </div>
          <div>
            <label className="block text-gray font-medium">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              name="apartment"
              value={formState.apartment}
              onChange={handleChange}
              className="w-full p-2 bg-Secondary outline-none rounded"
            />
          </div>
          <div>
            <label className="block text-gray font-medium">Town/City*</label>
            <input
              type="text"
              name="city"
              value={formState.city}
              onChange={handleChange}
              className="w-full p-2 bg-Secondary outline-none rounded"
            />
            {errors.city && <p className="text-Secondary2">{errors.city}</p>}
          </div>
          <div>
            <label className="block text-gray font-medium">Phone Number*</label>
            <input
              type="text"
              name="phoneNumber"
              value={formState.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 bg-Secondary outline-none rounded"
            />
            {errors.phoneNumber && (
              <p className="text-Secondary2">{errors.phoneNumber}</p>
            )}
          </div>
          <div>
            <label className="block text-gray font-medium">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full p-2 bg-Secondary outline-none rounded"
            />
            {errors.email && <p className="text-Secondary2">{errors.email}</p>}
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="border p-4 rounded">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-4 items-center"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain rounded-md mr-4"
                />
                <div>
                  <p className="font-medium">{item.title}</p>
                </div>
              </div>
              <p className="font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className=" flex w-full flex-col gap-6 rounded">
            <h1 className="font-poppins font-bold text-xl">Cart Total</h1>
            <div className="text-lg font-medium flex justify-between border-b pb-2 border-gray">
              <label>Subtotal: </label>
              <p>${totalPrice}</p>
            </div>
            <div className="text-lg font-medium flex justify-between border-b pb-2 border-gray">
              <label>Shipping:</label>
              <p>Free</p>
            </div>
            <div className="text-lg font-medium flex justify-between pb-2">
              <label>Total: </label>
              <p>${totalPrice}</p>
            </div>
            <div className="text-lg font-medium flex gap-4 pb-2">
              <input type="radio" className="accent-Button" checked />
              <label>Cash on delivery</label>
            </div>
            <div>
              <Button
                className="bg-Secondary2 outline-none2 text-Text"
                type="submit"
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
