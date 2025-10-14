import "./index.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Subperiosteal from "./pages/Subperiosteal";
import Surgicalkit from "./pages/Surgicalkit";
import { Route, Routes } from "react-router-dom";
import Conexaconnection from "./pages/Conexaconnection";
import Uniqueimplant from "./pages/Uniqueimplant";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/CheckOut";
import CategoryPage from "./pages/CategoryPage";
import AllProductsPage from "./pages/AllProductPage";

function App() {
  return (
    <CartProvider>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subperiosteal" element={<Subperiosteal />} />
          <Route path="/surgicalkit" element={<Surgicalkit />} />
          <Route path="/conexaconnection" element={<Conexaconnection />} />
          <Route path="/uniqueimplant" element={<Uniqueimplant />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/all-product" element={<AllProductsPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:name" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </Fragment>
    </CartProvider>
  );
}

export default App;
