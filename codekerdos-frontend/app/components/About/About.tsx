import { Grid, Typography } from "@mui/material";
import React from "react";
import VideoDialog from "./VideoDialog";
import "./About.css";

const About = () => {
  return (
    <Grid
      container
      px={12}
      py={10}
      spacing={2}
      sx={{
        background: "linear-gradient(to right, #16203B 80%, #1B99D4 120%)",
      }}
    >
      <Grid item xs={6}>
        <VideoDialog />
      </Grid>

      <Grid item xs={6}>
        <Grid
          spacing={5}
          container
          direction="column"
          justifyContent="space-around"
        >
          <Grid
            item
            xs={4}
            className="font-class"
            // sx={{ fontSize: "42px", fontWeight: "700" }}
          >
            <Typography
              component="span"
              fontSize="42px"
              fontWeight="700"
              color="#fff"
            >
              About
            </Typography>
            <Typography
              component="span"
              fontSize="42px"
              fontWeight="700"
              color="#fff"
              ml={1}
            >
              CodeKerdos
            </Typography>
          </Grid>
          <Grid item xs={4} className="">
            <p
              className="font-class"
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "300",
                lineHeight: "36px",
              }}
            >
              At CodeKerdos, we make coding education accessible and inclusive
              for college students through live, interactive webinars in Hindi
              and English. With 12/6 personalized support and hands-on learning,
              we empower students of all skill levels to master coding
              confidently.
            </p>
          </Grid>
          <Grid item xs={4}>
            <p
              className="font-class"
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "300",
                lineHeight: "36px",
              }}
            >
              Our unique internship placement program provides real-world
              experience, helping students kickstart successful tech careers.
              Committed to transparency and personalized guidance, we ensure
              every learner receives the mentorship and resources needed to
              overcome challenges and achieve their dreams.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
