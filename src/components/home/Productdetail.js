import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../redux/productDetailSlice";
import { addToCart } from "../../redux/cartSlice.js";
import Button from "../button/Button.js";
import toast from "react-hot-toast";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import image1 from "../../assets/Productdetail/icon-delivery-black.svg"
import image2 from "../../assets/Productdetail/Icon-return.svg"

const ProductDetail = () => {
  const { id, slug } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetail.product);
  const productStatus = useSelector((state) => state.productDetail.status);
  const error = useSelector((state) => state.productDetail.error);

  useEffect(() => {
    if (productStatus === "idle" || product?.id !== Number(id)) {
      dispatch(fetchProductById(id));
    }
  }, [id, productStatus, product, dispatch]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-cluster" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-cluster" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-cluster" />
        ))}
      </>
    );
  };
    
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length <= limit) {
      return text;
    }
    return words.slice(0, limit).join(" ") + ".";
  };


  let content;

  if (productStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (productStatus === "succeeded") {
    content = (
      <div className="flex justify-around p-9 gap-8 w-full">
        <div className="w-[50%] flex items-center justify-center">
          <img className="object-contain w-[300px]" src={product.image} alt={product.title} />
        </div>
        <div className="flex w-[50%] flex-col gap-6">
          <h1 className="font-bold text-3xl text-Text2">{product.title}</h1>
          <p className="text-lg flex items-center">
            Rating: {renderStars(product.rating.rate)}
            <span className="ml-2">({product.rating.count} reviews)</span>
          </p>
          <p className="text-2xl text-Text2 font-bold">Price: ${product.price}</p>

          <p className="text-lg">{truncateText(product.description, 40)}</p>

          <Button
            className="bg-Secondary2 text-Text py-2 text-sm cursor-pointer"
            onClick={() => {
              dispatch(addToCart(product));
              toast.success("Added To Cart");
            }}
          >
            Add to Cart
          </Button>
          <div className="border-2 rounded flex flex-col gap-4 border-gray p-4">
               <div className="flex  items-center gap-5 w-full">
                 <img src={image1} />
                 <div>
                 <p className="font-poppins font-medium text-base text-Text2">Free Delivery</p>
                 <p>Enter your postal code for Delivery Availability</p>

                 </div>
               </div>
               <hr className="bg-gray text-gray border border-gray"/>
               <div className="flex items-center gap-5 w-full">
                 <img src={image2} />
                 <div>
                 <p className="font-poppins font-medium text-base text-Text2">Return Delivery</p>
                 <p>Free 30 Days Delivery Returns. Details</p>

                 </div>
               </div>
          </div>
        </div>
      </div>
    );
  } else if (productStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <div className="p-8">{content}</div>;
};

export default ProductDetail;
