import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public");
const W = 1200;
const H = 630;

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#EA580C"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <g transform="translate(80,80)">
    <circle cx="40" cy="40" r="38" fill="none" stroke="white" stroke-width="3" opacity="0.5"/>
    <path d="M40 12l24 10v22c0 16-10 30-24 34-14-4-24-18-24-34V22L40 12z" fill="white" opacity="0.95"/>
    <path d="M28 40l8 8 12-16" stroke="#F97316" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <text x="140" y="136" font-family="'Plus Jakarta Sans',Arial,sans-serif" font-size="52" font-weight="900" fill="white">WebCare</text>
  <text x="140" y="180" font-family="Inter,Arial,sans-serif" font-size="24" fill="rgba(255,255,255,0.7)">by ISHConnect</text>
  <text x="80" y="300" font-family="'Plus Jakarta Sans',Arial,sans-serif" font-size="44" font-weight="700" fill="white">Web Development — Rwanda</text>
  <text x="80" y="352" font-family="Inter,Arial,sans-serif" font-size="22" fill="rgba(255,255,255,0.85)">Custom websites for schools, universities &amp; businesses</text>
  <rect x="80" y="420" width="200" height="50" rx="25" fill="white" opacity="0.2"/>
  <text x="180" y="452" font-family="Inter,Arial,sans-serif" font-size="18" font-weight="600" fill="white" text-anchor="middle">12-month support</text>
  <rect x="300" y="420" width="200" height="50" rx="25" fill="white" opacity="0.2"/>
  <text x="400" y="452" font-family="Inter,Arial,sans-serif" font-size="18" font-weight="600" fill="white" text-anchor="middle">Mobile-first</text>
  <rect x="520" y="420" width="200" height="50" rx="25" fill="white" opacity="0.2"/>
  <text x="620" y="452" font-family="Inter,Arial,sans-serif" font-size="18" font-weight="600" fill="white" text-anchor="middle">SEO-optimized</text>
  <text x="80" y="560" font-family="Inter,Arial,sans-serif" font-size="16" fill="rgba(255,255,255,0.5)">www.ishconnect.rw  —  wa.me/250787377750</text>
  <line x1="80" y1="530" x2="1120" y2="530" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
</svg>
`;

await sharp(Buffer.from(svg))
  .resize(W, H)
  .jpeg({ quality: 95 })
  .toFile(join(outDir, "opengraph.jpg"));

console.log("Generated public/opengraph.jpg");
