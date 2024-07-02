import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../../redux/uploadSlice';
import { fetchProducts } from "../../redux/productsSlice";
import { storage, db } from '../../config/firebase';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import toast from 'react-hot-toast'; 
import Button from "../button/Button.js"

const UploadProduct = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    try {
      // Upload image to Firebase Storage
      const storageRef = ref(storage, `product/${image.name}`);
      await uploadBytes(storageRef, image);

      // Get image URL
      const imageUrl = await getDownloadURL(storageRef);

      // Add product details to Firestore
      const productData = {
        title,
        description,
        rating: parseFloat(rating),
        category,
        price: parseFloat(price),
        imageUrl,
      };

      const docRef = await addDoc(collection(db, 'product'), productData);

      // Dispatch action to add product to Redux store
      dispatch(
        addProduct({
          id: docRef.id,
          ...productData,
        })
      );

      // Clear form fields
      setTitle('');
      setDescription('');
      setRating('');
      setCategory('');
      setPrice('');
      setImage(null);

      // Show success message
      toast.success('Product uploaded successfully');
      dispatch(fetchProducts());
    } catch (error) {
      console.error('Error uploading product:', error);
      toast.error('Failed to upload product');
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      // Remove product from Firestore
      await deleteDoc(doc(db, 'product', productId));

      // Dispatch action to remove product from Redux store
      dispatch(removeProduct(productId));

      // Show success message
      toast.success('Product removed successfully');
      dispatch(fetchProducts());
    } catch (error) {
      toast.error('Failed to remove product');
    }
  };

  return (
    <div className="flex p-9 gap-8">
      {/* Upload form */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Upload Product</h2>
        <div className="mb-4">
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <Button
            className="bg-Secondary2 text-Text font-bold py-2 px-4 rounded"
            onClick={handleUpload}
          >
            Upload Product
          </Button>
        </div>
      </div>

      {/* Manage products section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
        <div className="space-y-4">
          {products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border border-gray-200 p-4 rounded-lg"
              >
                <div>
                  <div className="font-bold">{product.title}</div>
                </div>
                <div className="flex items-center space-x-4">
                  <h1 className='font-bold text-lg'>{product.price}</h1>
                  <Button
                    className="flex items-center text-Text bg-Secondary2 hover:text-red-700"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
