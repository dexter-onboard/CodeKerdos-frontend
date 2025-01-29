"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import About from "./components/About/About";
import HeroSection from "./components/HeroSection/HeroSection";
import Offering from "./components/Offering/Offering";
import ShortCourses from "./components/Courses/ShortCourses";
import Courses from "./components/Courses/Courses";
import Testimonials from "./components/Testimonials/Testimonials";
import ReferralBanner from "./components/ReferralBanner/ReferralBanner";
import Team from "./components/Team/Team";
import Partners from "./components/Partners/Partners";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PricingBanner from "./components/PricingBanner/PricingBanner";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import BookFreeWebinarPopover from "./components/BookFreeWebinarPopover/BookFreeWebinarPopover";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

export type IUser = {
  loggedIn: boolean;
  token: string;
  studentInfo: {
    name: string;
    username: string;
    phoneNumber: string;
  };
};

export default function Home() {
  const isMobileOrTablet = useMediaQuery("(max-width: 1024px)");

  const [user, setUser] = useState<IUser>({
    loggedIn: false,
    token: "",
    studentInfo: { name: "", username: "", phoneNumber: "" },
  });

  if (isMobileOrTablet) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#10172A",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography className="font-class" variant="h5">
          Under Construction. Will be up soon!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Navbar user={user} setUser={setUser} />
      <HeroSection />
      <Box id="about-us">
        <About />
      </Box>
      <Box id="offerings">
        <Offering />
      </Box>
      <PricingBanner />
      <Box id="courses">
        <Courses user={user} />
      </Box>
      <ShortCourses user={user} />
      <Box id="testimonials">
        <Testimonials />
      </Box>
      <ReferralBanner />
      <Team />
      <Partners />
      <Faq />
      <Box id="contact-us">
        <Contact />
      </Box>
      <Footer />
      <WhatsappButton />
      <BookFreeWebinarPopover />
    </Box>
  );
}
