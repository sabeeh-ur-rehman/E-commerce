import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import { addToCart } from "../../redux/cartSlice";
import Button from "../button/Button.js";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Productcard = ({ startId = 1, endId = 50 }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
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

  let content;

  if (productStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (productStatus === "succeeded") {
    const filteredProducts = products.filter(
      (product) => product.id >= startId && product.id <= endId
    );

    content = filteredProducts.map((product) => (
      <div
        key={product.id}
        className={`card shadow-md flex flex-col gap-2 justify-between w-[200px] h-[400px] rounded-md p-2`}
      >
        {" "}
        <Link to={`/product/${product.id}`}>
          <img className="w-48 h-64" src={product.image} alt={product.title} />
        </Link>
        <div className="flex flex-col items-start">
          <Link to={`/product/${product.id}`}>
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
    ));
  } else if (productStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="cards-container grid gap-y-8 items-end grid-cols-5">
      {content}
    </div>
  );
};

export default Productcard;
