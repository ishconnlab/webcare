import { FadeIn } from "./FadeIn";
import { Badge } from "./Badge";

export function SectionHeading({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  return (
    <FadeIn className="text-center mb-14">
      <Badge>{badge}</Badge>
      <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-gray-900 mt-4 mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {title}
      </h2>
      {subtitle && <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </FadeIn>
  );
}
