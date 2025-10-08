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

function App() {
  return (
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
      </Routes>
    </Fragment>
  );
}

export default App;
