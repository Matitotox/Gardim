import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Signature from "./components/Signature";
import Menu from "./components/Menu";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import useReveal from "./hooks/useReveal";

const Home = () => {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Signature />
        <Menu />
        <About />
        <Gallery />
        <Footer />
      </main>
      <Toaster position="bottom-right" />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
