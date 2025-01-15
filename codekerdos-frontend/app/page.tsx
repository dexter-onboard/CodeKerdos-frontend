import { Box } from "@mui/material";
import About from "./components/About/About";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <About />
    </Box>
  );
}
