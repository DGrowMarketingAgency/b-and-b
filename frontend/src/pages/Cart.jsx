import React, { useState } from "react";

const Cart = () => {
  // Example cart items (empty array means cart is empty)
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="cart-container p-4">
      {cartItems.length === 0 ? (
        <div className="w-full h-[50vh] flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold ">Your cart is empty.</p>
        </div>
      ) : (
        <div>
          <h2>Your Cart Items:</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
