import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToSection } from "@/components/ScrollToSection";
import Home from "@/pages/Home";
import PortfolioBuilder from "@/pages/PortfolioBuilder";

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/portfolio-builder" element={<PortfolioBuilder />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
