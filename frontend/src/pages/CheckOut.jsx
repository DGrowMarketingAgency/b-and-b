import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <ul className="space-y-4 mb-6">
        {cartItems.map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">
                Diameter: {item.diameter}, Length: {item.length}
              </p>
              <p className="text-sm">Qty: {item.quantity}</p>
              <p className="text-red-500 font-bold">${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
      <button className="mt-4 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition">
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
