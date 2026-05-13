export interface ThemeOption {
  name: string;
  label: string;
  primary: string;
  secondary: string;
  accent: string;
  font: string;
  headingFont: string;
}

export const themes: ThemeOption[] = [
  {
    name: "modern",
    label: "Modern",
    primary: "#2563eb",
    secondary: "#1e40af",
    accent: "#f59e0b",
    font: "'Inter', sans-serif",
    headingFont: "'Inter', sans-serif",
  },
  {
    name: "minimal",
    label: "Minimal",
    primary: "#18181b",
    secondary: "#3f3f46",
    accent: "#a1a1aa",
    font: "'Inter', sans-serif",
    headingFont: "'Inter', sans-serif",
  },
  {
    name: "corporate",
    label: "Corporate",
    primary: "#1e3a5f",
    secondary: "#0f2744",
    accent: "#e67e22",
    font: "'Inter', sans-serif",
    headingFont: "'Plus Jakarta Sans', sans-serif",
  },
  {
    name: "developer",
    label: "Developer",
    primary: "#0d9488",
    secondary: "#0f766e",
    accent: "#2dd4bf",
    font: "'JetBrains Mono', monospace",
    headingFont: "'Inter', sans-serif",
  },
  {
    name: "elegant",
    label: "Elegant",
    primary: "#7c3aed",
    secondary: "#5b21b6",
    accent: "#c084fc",
    font: "'Inter', sans-serif",
    headingFont: "'Playfair Display', serif",
  },
  {
    name: "dark",
    label: "Dark Mode",
    primary: "#a855f7",
    secondary: "#7c3aed",
    accent: "#22d3ee",
    font: "'Inter', sans-serif",
    headingFont: "'Inter', sans-serif",
  },
  {
    name: "creative",
    label: "Creative",
    primary: "#ec4899",
    secondary: "#db2777",
    accent: "#fde68a",
    font: "'Inter', sans-serif",
    headingFont: "'Space Grotesk', sans-serif",
  },
  {
    name: "startup",
    label: "Startup",
    primary: "#f97316",
    secondary: "#ea580c",
    accent: "#06b6d4",
    font: "'Inter', sans-serif",
    headingFont: "'Plus Jakarta Sans', sans-serif",
  },
];

export const fontPairings = [
  { label: "Inter + Inter", heading: "'Inter', sans-serif", body: "'Inter', sans-serif" },
  { label: "Jakarta Sans + Inter", heading: "'Plus Jakarta Sans', sans-serif", body: "'Inter', sans-serif" },
  { label: "Playfair + Inter", heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
  { label: "Space Grotesk + Inter", heading: "'Space Grotesk', sans-serif", body: "'Inter', sans-serif" },
  { label: "Mono + Inter", heading: "'JetBrains Mono', monospace", body: "'Inter', sans-serif" },
];

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

export function extractColorsFromImage(file: File): Promise<string[]> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 100;
      canvas.height = 100;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, 100, 100);
      const data = ctx.getImageData(0, 0, 100, 100).data;
      const colorMap = new Map<string, number>();
      for (let i = 0; i < data.length; i += 16) {
        const r = Math.round(data[i] / 32) * 32;
        const g = Math.round(data[i + 1] / 32) * 32;
        const b = Math.round(data[i + 2] / 32) * 32;
        const key = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
        colorMap.set(key, (colorMap.get(key) || 0) + 1);
      }
      const sorted = [...colorMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([color]) => color);
      resolve(sorted);
    };
    img.src = URL.createObjectURL(file);
  });
}
