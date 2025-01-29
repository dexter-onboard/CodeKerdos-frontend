"use client";

import { Grid, Typography } from "@mui/material";
import React from "react";
import VideoDialog from "./VideoDialog";
import "./About.css";

const About = () => {
  return (
    <Grid
      container
      px={{ xs: 3, sm: 6, md: 10, lg: 12 }}
      py={{ xs: 5, sm: 8, md: 10 }}
      spacing={2}
      sx={{
        background: "linear-gradient(to right, #16203B 80%, #1B99D4 120%)",
      }}
    >
      <Grid item xs={12} md={6}>
        <VideoDialog />
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid
          // spacing={5}
          container
          direction="column"
          justifyContent="space-around"
          spacing={{ xs: 2, sm: 3 }}
        >
          <Grid
            item
            xs={4}
            className="font-class"
            // sx={{ fontSize: "42px", fontWeight: "700" }}
          >
            <Typography
              component="span"
              className="font-class"
              fontWeight="700"
              color="#fff"
              fontSize={{ xs: "32px", sm: "36px", md: "42px" }}
            >
              About
            </Typography>
            <Typography
              component="span"
              fontSize={{ xs: "32px", sm: "36px", md: "42px" }}
              fontWeight="700"
              color="#fff"
              ml={1}
            >
              CodeKerdos
            </Typography>
          </Grid>
          <Grid item xs={4} className="">
            <Typography
              className="font-class"
              sx={{
                color: "#fff",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: "300",
                lineHeight: { xs: "28px", sm: "32px", md: "36px" },
                textAlign: { xs: "center", md: "left" }, // Center on mobile, left align on laptops
                // maxWidth: "90%", // Prevents stretching
              }}
            >
              At CodeKerdos, we make coding education accessible and inclusive
              for college students through live, interactive webinars in Hindi
              and English. With 12/6 personalized support and hands-on learning,
              we empower students of all skill levels to master coding
              confidently.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              className="font-class"
              sx={{
                color: "#fff",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: "300",
                lineHeight: { xs: "28px", sm: "32px", md: "36px" },
                textAlign: { xs: "center", md: "left" },
                // maxWidth: "90%",
              }}
            >
              Our unique internship placement program provides real-world
              experience, helping students kickstart successful tech careers.
              Committed to transparency and personalized guidance, we ensure
              every learner receives the mentorship and resources needed to
              overcome challenges and achieve their dreams.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
