import { Toaster } from "react-hot-toast";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TrendingProducts from "./components/TrendingProducts";
import Banner from "./components/Banner";
import NewArrival from "./components/NewArrival";
import Footer from "./components/Footer";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {

const [showCart, setShowCart] = useState(false)

  return (
    <>
      <Navbar setShowCart={setShowCart}/>
      {showCart && <Cart setShowCart={setShowCart}/>}
      <Hero />
      <Features />
      <TrendingProducts/>
      <Banner/>
      <NewArrival/>
      <Footer/>
      <Toaster position="bottom-center" reverseOrder={false}/>
    </>
  );
}

export default App;
