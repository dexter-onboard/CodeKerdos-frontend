"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "./offering.css";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

interface IOffering {
  head: string;
  desc: string;
  logo: string;
  logoBgColor: string;
}

const Offering = () => {
  const offerings: IOffering[] = [
    {
      logoBgColor: "#F8CFC6",
      logo: "/images/live-icon.png",
      head: "Live Classes Only",
      desc: "Learn coding interactively with live, engaging sessions—no recordings!",
    },
    {
      logoBgColor: "#E0D7FF",
      logo: "/images/project-icon.png",
      head: "Real-World Projects",
      desc: "Build a portfolio with real-world coding projects completed during live classes.",
    },
    {
      logoBgColor: "#CCE3FF",
      logo: "/images/intern-icon.png",
      head: "Certificate & Internship",
      desc: "Receive a course completion certificate and a guaranteed paid internship to kickstart your career!",
    },
    {
      logoBgColor: "#C7FFEC",
      logo: "/images/resume-icon.png",
      head: "Resume Support",
      desc: "Craft professional resumes with personalized guidance to showcase your skills.",
    },
    {
      logoBgColor: "#FFEBB8",
      logo: "/images/job-icon.png",
      head: "Job Assistance",
      desc: "End-to-end assistance to help you land your dream job in tech.",
    },
    {
      logoBgColor: "#EFD6FF",
      logo: "/images/mock-icon.png",
      head: "Mock Interviews",
      desc: "Unlimited mock interviews to boost confidence and ace job opportunities.",
    },
    {
      logoBgColor: "#18427940",
      logo: "/images/support-icon.png",
      head: "Quick Technical Support",
      desc: "Connect to an instructor within 15 minutes for any coding doubts.",
    },
    {
      logoBgColor: "#FFD7E5",
      logo: "/images/learn-icon.png",
      head: "Learn in English & Hindi",
      desc: "No language barriers! Learn coding seamlessly in both English and Hindi.",
    },
    {
      logoBgColor: "#DBFFC5",
      logo: "/images/open-icon.png",
      head: "Open Source Contributions",
      desc: "Exclusive support for students to contribute to open source projects like GSOC and boost their coding profiles",
    },
  ];

  return (
    <Box p={8} mt={6}>
      <Box textAlign={"center"}>
        <Typography
          className="font-class"
          sx={{ fontSize: "20px", color: "#5B6165", fontWeight: "600" }}
          gutterBottom
          variant="h6"
          component="div"
        >
          Why CodeKerdos
        </Typography>

        <Typography
          className="font-class"
          sx={{ fontSize: "42px", fontWeight: "700" }}
          gutterBottom
          variant="h1"
          component="div"
          mb={6}
          mt={2}
        >
          Career-Focused{" "}
          <span style={{ color: "#1B99D4" }}>Coding Education</span>
        </Typography>
      </Box>
      <Grid
        container
        spacing={6}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {offerings.map((item: IOffering) => (
          <Grid item xs={4} key={uuidv4()}>
            <Card
              sx={{
                borderRadius: "10px",
                width: "auto",
                height: 230,
                backgroundColor: "#F8FBFB",
                boxShadow:
                  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              }}
            >
              <CardActionArea>
                <CardContent sx={{ padding: "16px" }}>
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: item.logoBgColor,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    <Image src={item.logo} width={20} height={20} alt="" />
                  </Box>

                  <Typography
                    className="font-class"
                    sx={{ fontSize: "20px" }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {item.head}
                  </Typography>
                  <Typography
                    className="font-class"
                    variant="body2"
                    sx={{ color: "#5B6165", fontSize: "16px" }}
                    mt={2}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Offering;
