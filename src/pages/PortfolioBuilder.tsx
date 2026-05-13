import { useEffect } from "react";
import { PortfolioBuilderPage } from "@/components/portfolio/PortfolioBuilder";

export default function PortfolioBuilder() {
  useEffect(() => {
    document.title = "AI Portfolio Builder | WebCare by ISHConnect";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Generate a professional portfolio website instantly with WebCare's AI Portfolio Builder. Choose from 8 themes, customize colors, and export as standalone HTML.";
  }, []);

  return <PortfolioBuilderPage />;
}
