// src/pages/ProductDetails.js
import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext, Fragment } from "react";
import { CartContext } from "../context/CartContext";
import products from "../dataProduct/ProductData";
import Category from "../components/Category";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedDiameter, setSelectedDiameter] = useState(
    product?.specifications?.diameters[0]
  );
  const [selectedLength, setSelectedLength] = useState(
    product?.specifications?.lengths[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.images[0].url);

  if (!product) {
    return (
      <h2 className="text-center my-10 text-red-500">Product not found</h2>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      diameter: selectedDiameter,
      length: selectedLength,
      quantity,
    });
    navigate("/cart");
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      diameter: selectedDiameter,
      length: selectedLength,
      quantity,
    });
    navigate("/checkout");
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <Fragment>
      {/* Header */}
      <div className="text-center my-14 px-4 font-bold text-red-500">
        <h4>B&B DENTAL PRODUCTS</h4>
      </div>

      <Category />

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 lg:px-20 mb-20 mt-10 items-start md:mt-24">
        {/* Image Gallery */}
        <div className="flex flex-col items-center">
          <img
            src={mainImage}
            alt={product.images[0].alt}
            className="w-full max-w-[400px] h-auto rounded-lg shadow-md object-contain"
          />
          <div className="flex gap-3 mt-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={img.alt}
                className={`w-20 h-20 object-cover border rounded-md cursor-pointer transition-all ${
                  mainImage === img.url
                    ? "border-red-500 scale-105"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(img.url)}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-red-600 text-3xl font-semibold mb-4">
            {product.name}
          </h1>
          {/* <p className="text-lg font-medium mb-2">${product.price}</p> */}
          <p className="text-sm text-gray-500 mb-6">SKU: {product.sku}</p>

          {/* Diameter */}
          {/* <div className="mb-4">
            <h4 className="font-semibold mb-2">Diameter:</h4>
            <div className="flex flex-wrap gap-2">
              {product.specifications.diameters.map((d, i) => (
                <button
                  key={i}
                  className={`px-3 py-1.5 border rounded-md transition ${
                    selectedDiameter === d
                      ? "bg-red-500 text-white"
                      : "border-gray-400 text-gray-600"
                  }`}
                  onClick={() => setSelectedDiameter(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div> */}

          {/* Length */}
          {/* <div className="mb-4">
            <h4 className="font-semibold mb-2">Length:</h4>
            <div className="flex flex-wrap gap-2">
              {product.specifications.lengths.map((len, i) => (
                <button
                  key={i}
                  className={`px-3 py-1.5 border rounded-md transition ${
                    selectedLength === len
                      ? "bg-red-500 text-white"
                      : "border-gray-400 text-gray-600"
                  }`}
                  onClick={() => setSelectedLength(len)}
                >
                  {len}
                </button>
              ))}
            </div>
          </div> */}

          {/* Quantity */}
          {/* <div className="flex items-center gap-3 mb-6">
            <h4 className="font-semibold">Quantity:</h4>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 text-xl font-bold text-gray-600 hover:text-red-500"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-3 py-1 text-xl font-bold text-gray-600 hover:text-red-500"
              >
                +
              </button>
            </div>
          </div> */}

          {/* Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={handleAddToCart}
              className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition"
            >
              Buy It Now
            </button>
          </div> */}

          {/* Warranty & Delivery */}
          {/* <p className="text-sm text-gray-600 mb-4">
            <strong>{product.specifications.warranty}</strong> warranty.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            {product.specifications.delivery}
          </p> */}
          <div className="">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              All Surgical Procedures and Excellent in All Bone Types
            </h2>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              {product.properties?.map((prop, i) => (
                <li key={i}>{prop}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Description */}
      {/* <div className="w-[90%] lg:w-[70%] mx-auto mb-20">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          All Surgical Procedures and Excellent in All Bone Types
        </h2>
        <p className="text-gray-600 mb-6">{product.description}</p>

        <h3 className="text-lg font-semibold mb-2">Properties</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          {product.properties?.map((prop, i) => (
            <li key={i}>{prop}</li>
          ))}
        </ul>
      </div> */}
    </Fragment>
  );
};

export default ProductDetails;
