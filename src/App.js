import "./App.css";
import CreateProduct from "./pages/CreateProduct";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Footers from "./components/Footers";
import Special from "./pages/Special";
import {Cart} from "./pages/cart/Carts";
import { ShopContextProvider } from "./pages/cart/shop-context/shop-context";
import CheckOut from "./pages/CheckOut";


function App() {
  return (
    <div style={{ textAlign: "center" }} className="App">
      <ShopContextProvider>
      <Nav />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/special" element={<Special />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pdt/:id" element={<SingleProduct />} />
        <Route path="/carts" element={<Cart/>} />
        <Route path="/checkout" element={<CheckOut/>} />
      </Routes>
      </ShopContextProvider>
  
      
    </div>
  );
}

export default App;
