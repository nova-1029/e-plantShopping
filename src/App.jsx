import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";
import AboutUs from "./pages/AboutUs";

import "./App.css";

function LandingPage() {
  return (
    <div className="background-image">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Discover beautiful plants and bring nature into your home.
        </p>

        <Link to="/plants" className="get-started">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
