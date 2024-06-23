import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import Button from "../button/Button.js";

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
        <img className="w-48 h-64" src={product.image} alt={product.title} />
        <div className="flex flex-col items-start">
          <Button className="bg-Button w-full text-Text py-2 text-sm cursor-pointer">
            Add to Cart
          </Button>
          <h1 className="font-bold text-start">{shortenTitle(product.title)}</h1>
          <div className="font-bold text-Secondary2">
            Price: ${product.price}
          </div>
        </div>
      </div>
    ));
  } else if (productStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="cards-container grid gap-1 items-end grid-cols-5">
      {content}
    </div>
  );
};

export default Productcard;
