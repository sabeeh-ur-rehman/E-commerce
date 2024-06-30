import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, addToWishlist } from "../../redux/wishlistSlice";
import { addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import toast from "react-hot-toast";
import Button from "../button/Button.js";
import { slugify } from "../../utils/slugify.js";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const shortenTitle = (title, wordLimit = 2) => {
    const words = title.split(" ");
    return words.slice(0, wordLimit).join(" ");
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromWishlist(product.id));
    toast.success("Added to Cart");
  };

  const handleToggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      dispatch(removeFromWishlist(product.id));
      toast.success("Removed from Wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to Wishlist");
    }
  };

  return (
    <div className="p-9 flex gap-14 justify-between">
      <div className="w-full">
        <h1 className="text-2xl font-medium mb-4">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <div className="p-40 flex flex-col gap-8 items-center justify-center font-bold text-4xl font-poppins capitalize">
            Your Wishlist is empty
            <Link to="../">
          <Button className="bg-Secondary2 text-Text">Return To Shop</Button>
        </Link>
          </div>
          
        ) : (
          <div className="grid gap-y-8 grid-cols-6 items-end">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="card shadow-md flex flex-col gap-2 justify-between w-[200px] h-[400px] rounded-md p-2 relative"
              >
                <Link to={`/product/${product.id}/${slugify(product.title)}`}>
                  <img
                    className="w-48 h-64"
                    src={product.image}
                    alt={product.title}
                  />
                </Link>
                <div
                  className="absolute top-2 right-2 cursor-pointer text-2xl"
                  onClick={() => handleToggleWishlist(product)}
                >
                  {wishlist.some((item) => item.id === product.id) ? (
                    <AiFillHeart className="text-Secondary2" />
                  ) : (
                    <AiOutlineHeart className="text-Secondary2" />
                  )}
                </div>
                <div className="flex flex-col items-start">
                  <Link to={`/product/${product.id}/${slugify(product.title)}`}>
                    <h1 className="font-bold text-start">
                      {shortenTitle(product.title)}
                    </h1>
                  </Link>
                  <div className="font-bold text-Secondary2">
                    Price: ${product.price}
                  </div>
                  <Button
                    className="bg-Button w-full text-Text py-2 text-sm cursor-pointer"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
