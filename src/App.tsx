import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToSection } from "@/components/ScrollToSection";
import Home from "@/pages/Home";
import PortfolioBuilder from "@/pages/PortfolioBuilder";
import FreeTools from "@/pages/FreeTools";

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
        <Route path="/free-tools" element={<FreeTools />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
