// src/pages/AllProductsPage.js
import React from "react";
import { Link } from "react-router-dom";
import products from "../dataProduct/ProductData";

const AllProductsPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
        All Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img
                src={product.images[0].url}
                alt={product.images[0].alt}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-red-500 font-bold mt-2">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
