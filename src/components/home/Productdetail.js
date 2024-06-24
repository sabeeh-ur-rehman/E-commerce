import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../redux/productDetailSlice";
import { addToCart } from "../../redux/cartSlice.js";
import Button from "../button/Button.js";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetail.product);
  const productStatus = useSelector((state) => state.productDetail.status);
  const error = useSelector((state) => state.productDetail.error);

  useEffect(() => {
    if (productStatus === "idle" || product?.id !== Number(id)) {
      dispatch(fetchProductById(id));
    }
  }, [id, productStatus, product, dispatch]);

  let content;

  if (productStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (productStatus === "succeeded") {
    content = (
      <div className="flex flex-col items-center">
        <img className="w-48 h-64" src={product.image} alt={product.title} />
        <h1 className="font-bold text-2xl">{product.title}</h1>
        <p className="text-lg">{product.description}</p>
        <p className="text-lg font-bold">Price: ${product.price}</p>
        <p className="text-lg">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
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
    );
  } else if (productStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="p-8">
      {content}
    </div>
  );
};

export default ProductDetail;
