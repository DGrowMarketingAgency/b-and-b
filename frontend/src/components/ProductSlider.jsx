import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductSlider = ({ products, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">No products available</p>;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getSlideIndex = (offset) => {
    return (currentIndex + offset + products.length) % products.length;
  };

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoSlideInterval]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to product page
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Main slider */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <ArrowRight className="rotate-180" />
        </button>

        <div className="flex items-center gap-4 relative w-[80%] justify-center">
          {[-1, 0, 1].map((offset) => {
            const product = products[getSlideIndex(offset)];
            const scale = offset === 0 ? 1 : 0.7;
            const zIndex = offset === 0 ? 10 : 5;
            const opacity = offset === 0 ? 1 : 0.5;

            return (
              <img
                key={product.id}
                src={product.images?.[0]?.url || "/placeholder.png"}
                alt={product.name}
                onClick={() => handleProductClick(product.id)}
                className="transition-transform duration-300 cursor-pointer"
                style={{
                  transform: `scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              />
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Product name */}
      <p className="mt-3 font-semibold text-lg text-center">
        {products[currentIndex]?.name}
      </p>

      {/* Dots navigation */}
      <div className="flex gap-2 mt-4">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
