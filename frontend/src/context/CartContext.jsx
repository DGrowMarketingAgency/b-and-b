// src/context/CartContext.js
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage on initial render
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const updateQuantity = (id, diameter, length, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.diameter === diameter && item.length === length
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const removeFromCart = (id, diameter, length) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.id === id &&
            item.diameter === diameter &&
            item.length === length
          )
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(
        (item) =>
          item.id === newItem.id &&
          item.diameter === newItem.diameter &&
          item.length === newItem.length
      );
      if (existing) {
        return prevItems.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
