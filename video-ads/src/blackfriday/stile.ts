import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Font locali in public/fonts (Playfair Display + Montserrat, licenza OFL)
const font = (family: string, file: string, weight: string) =>
  loadFont({ family, url: staticFile(`fonts/${file}`), weight });

font("Playfair Display", "playfair-900.ttf", "900");
font("Montserrat", "montserrat-600.ttf", "600");
font("Montserrat", "montserrat-800.ttf", "800");
font("Montserrat", "montserrat-900.ttf", "900");

export const serif = "Playfair Display";
export const sans = "Montserrat";

export const ORO = "linear-gradient(180deg, #fff3c4 0%, #f5c84c 35%, #b8862b 70%, #f3d57a 100%)";

// Testo con riempimento oro
export const testoOro: React.CSSProperties = {
  backgroundImage: ORO,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

export const SFONDO = "radial-gradient(ellipse at 50% 45%, #3a2a12 0%, #140e06 55%, #050403 100%)";
