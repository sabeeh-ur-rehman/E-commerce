import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import { addToCart } from "../../redux/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../redux/wishlistSlice";
import Button from "../button/Button.js";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { slugify } from "../../utils/slugify.js";

const Productcard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const wishlist = useSelector((state) => state.wishlist);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const shortenTitle = (title, wordLimit = 2) => {
    const words = title.split(" ");
    return words.slice(0, wordLimit).join(" ");
  };

  const isInWishlist = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product)) {
      dispatch(removeFromWishlist(product.id));
      toast.success("Removed from Wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to Wishlist");
    }
  };

  let content;

  if (productStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (productStatus === "succeeded") {
    content = products.map((product) => {
      return(
      <div
        key={product.id}
        className="card shadow-lg flex flex-col gap-2 justify-between items-center rounded-md p-2 relative"
      >
         <Link to={`/product/${product.id}/${slugify(product.title)}`}>
          <img className="w-48 h-64" src={product.imageUrl} alt={product.title} />
        </Link>
        <div
          className="absolute top-2 right-2 cursor-pointer text-2xl"
          onClick={() => toggleWishlist(product)}
        >
          {isInWishlist(product) ? (
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
            onClick={() => {
              dispatch(addToCart(product));
              toast.success("Added To Cart");
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
  )});
  } else if (productStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="cards-container grid gap-y-8 gap-x-8 max-md:gap-y-2 max-md:items-center grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1">
      {content}
    </div>
  );
};

export default Productcard;
