import { useEffect } from "react";
import { LearningPortal } from "@/components/learning/LearningPortal";

export default function LearningPortalPage() {
  useEffect(() => {
    document.title = "Learning Portal | WebCare by ISHConnect";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Free learning portal with courses in Programming, Web Development, Data Science, AI, Cybersecurity, and more. Step-by-step lessons with progress tracking.";
  }, []);

  return <LearningPortal />;
}
