import { Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Grid container bgcolor={"#F8FBFB"} px={2} py={8}>
      <Grid item xs={6}></Grid>

      <Grid item xs={6}>
        <Grid
          spacing={3}
          container
          direction="column"
          justifyContent="space-evenly"
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
              color="#1E1E1E"
            >
              About
            </Typography>{" "}
            <Typography
              component="span"
              fontSize="42px"
              fontWeight="700"
              color="#1B99D4"
              ml={1}
            >
              CodeKerdos
            </Typography>
          </Grid>
          <Grid item xs={4} className="font-class">
            <Typography color="#343A40" fontSize="20px" lineHeight="36px">
              At CodeKerdos, we make coding education accessible and inclusive
              for college students through live, interactive webinars in Hindi
              and English. With 12/6 personalized support and hands-on learning,
              we empower students of all skill levels to master coding
              confidently.
            </Typography>
          </Grid>
          <Grid item xs={4} className="font-class">
            <Typography color="#343A40" fontSize="20px" lineHeight="36px">
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
