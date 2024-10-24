import { useState } from "react";
import "./App.css";
import Navbar from "./Componant/Navbar";
import "sweetalert2/dist/sweetalert2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Slider from "./Componant/Slider";
import ProdectList from "./Componant/ProdectList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./Componant/About";
import ProdectDetalis from "./Componant/ProdectDetalis";
import Contact from "./Componant/Contact";
import Cart from "./Componant/Cart"; // استيراد مكون العربة

function App() {
  const [cartItems, setCartItems] = useState([]); // حالة لإدارة السلة

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productToRemove.id)
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar path="/" cartItemsCount={cartItems.length} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProdectList addToCart={addToCart} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/products/:prodectId" element={<ProdectDetalis />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
