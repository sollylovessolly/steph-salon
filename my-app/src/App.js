import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import InspoPage from "./pages/InspoPage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route path="/inspo" element={<InspoPage />} />
        <Route path="/products" element={<ProductsPage />} />

      </Routes>
    </Router>
  );
};

export default App;
