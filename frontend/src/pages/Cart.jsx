// src/pages/Cart.js
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-red-600">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="flex align-middle justify-center flex-col gap-2">
          <p className="text-center text-gray-500 ">Your cart is empty.</p>
          <button
            onClick={() => navigate("/all-product")}
            className="w-fit px-8 py-4 bg-red-600 text-white rounded-2xl font-bold m-auto"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-6 border-b pb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  Diameter: {item.diameter}, Length: {item.length}
                </p>
                <p className="text-red-500 font-bold">${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.diameter,
                      item.length,
                      item.quantity > 1 ? item.quantity - 1 : 1
                    )
                  }
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.diameter,
                      item.length,
                      item.quantity + 1
                    )
                  }
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() =>
                  removeFromCart(item.id, item.diameter, item.length)
                }
                className="text-sm text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total & Actions */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <button
                onClick={() => navigate("/checkout")}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Checkout
              </button>
              <button
                onClick={handlePlaceOrder}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
