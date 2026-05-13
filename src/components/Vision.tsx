import { Monitor } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Vision() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-6">
            <Monitor className="w-7 h-7 text-orange-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Digital Transformation for Rwanda's Schools and Businesses
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto text-lg mb-6">
            WebCare is not just a web development service — it is part of ISHConnect's broader mission to modernise institutions across Rwanda through accessible, high-quality digital infrastructure.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
            When a school has a strong online presence, it reaches more families, communicates better, and earns trust faster. When a business has a professional website, it closes more clients. That is the outcome every WebCare project is built to deliver.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
