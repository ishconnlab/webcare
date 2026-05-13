import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sectionMap: Record<string, string> = {
  "/about": "about",
  "/services": "services",
  "/contact": "contact",
};

export function ScrollToSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    const id = sectionMap[pathname];
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}
