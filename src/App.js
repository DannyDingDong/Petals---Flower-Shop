import "./App.scss";
import Contactpage from "./Pages/ContactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Productpage from "./Pages/ProductsPage";
import Homepage from "./Pages/HomePage";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import DropDownCart from "./Components/DropDownCart";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [singleProd, setSingleProd] = useState({});

  const showPopUp = (item) => {
    setIsShowing(true);
    setTimeout(() => setIsShowing(false), 5000);
    setSingleProd(item);
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    // Checks for duplicates and adds quantity
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <BrowserRouter>
      <Navbar countCartItems={cartItems.length} />
      {isShowing ? (
        <>
          <DropDownCart props={singleProd} />
        </>
      ) : (
        ""
      )}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Shop" element={<Productpage />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route
          path="/Cart"
          element={
            <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
          }
        />
        <Route
          path="/Shop/:id"
          element={<Product onAdd={onAdd} showPopUp={showPopUp} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
