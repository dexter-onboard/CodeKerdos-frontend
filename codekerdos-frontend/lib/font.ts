import { Poppins, Montserrat, Merriweather, Inter } from "next/font/google";

export const secondary = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-1",
  fallback: [
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

export const primary = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-2",
  fallback: [
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "Helvetica",
    "sans-serif",
  ],
});

export const tertiary = Merriweather({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-3",
  fallback: [
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "Helvetica",
    "sans-serif",
  ],
});

export const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-main",
  fallback: [
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "Helvetica",
    "sans-serif",
  ],
});
