"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import CheckIcon from "@mui/icons-material/Check";
import "./courses.css";

interface ICourse {
  courseID: string;
  title: string;
  description: string[];
  price: string;
  imageURL: string;
}

const courses: ICourse[] = [
  {
    courseID: "FSWD123",
    title: "LaunchPad Nodejs & SpringBoot",
    description: [
      "Learn HTML, CSS, JavaScript, React, and Node.js",
      "Duration: 13-15 months",
      "Fully online",
    ],
    price: "70,000",
    imageURL: "/images/launch-node-spring.svg",
  },
  {
    courseID: "MERND456",
    title: "MERN Stack Development",
    description: [
      "Learn MongoDB, Express.js, React, and Node.js",
      "Duration: 5 months",
      "Fully online",
    ],
    price: "40,000",
    imageURL: "/images/launch-mern.svg",
  },
  {
    courseID: "SBL789",
    title: "FullStack Launchpad (Spring Boot)",
    description: [
      "Learn Java, Spring Boot, and modern front-end tools",
      "Duration: 5 months",
      "Fully online",
    ],
    price: "60,000",
    imageURL: "/images/launch-spring.svg",
  },
  {
    courseID: "NJL012",
    title: "FullStack Launchpad (Node.js)",
    description: [
      "Learn Node.js, Express, and modern front-end tools",
      "Duration: 10-15 months",
      "Fully online",
    ],
    price: "60,000",
    imageURL: "/images/launch-node.svg",
  },
  {
    courseID: "PYTH345",
    title: "LaunchPad Python & Nodejs",
    description: [
      "Learn Python for web, data, and automation",
      "Beginner to advanced concepts",
      "Fully online",
    ],
    price: "70,000",
    imageURL: "/images/launch-python-node.svg",
  },
];

const Courses = () => {
  return (
    <Box mt={10}>
      <Box textAlign={"center"}>
        <Typography
          className="font-class"
          sx={{ fontSize: "20px", color: "#5B6165", fontWeight: "600" }}
          gutterBottom
          variant="h6"
          component="div"
        >
          Courses
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
          Master Coding with{" "}
          <span style={{ color: "#1B99D4" }}>Expert-Led Courses</span>
        </Typography>
      </Box>

      <Box
        flexWrap={"wrap"}
        gap={"15px"}
        mt={6}
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(47deg, rgba(22,32,59,1) 65%, rgba(27,153,212,1) 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "32px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/images/course-bg.png')",
            opacity: 0.1,
          }}
        />

        <Box
          sx={{
            zIndex: 1,
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "space-evenly",
          }}
        >
          {courses &&
            courses?.length > 0 &&
            courses.map((course: ICourse) => (
              <Card
                key={course.courseID}
                sx={{ maxWidth: 500, borderRadius: "8px" }}
              >
                <CardMedia
                  sx={{ height: 200, width: 425 }}
                  image={course.imageURL}
                  title={course.title}
                />

                <CardContent>
                  <Typography
                    className="font-class"
                    fontSize={"20px"}
                    fontWeight={"600"}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {course.title}
                  </Typography>

                  <Box
                    mt={2}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"10px"}
                  >
                    {course?.description.map((desc: string) => (
                      <Box
                        key={uuidv4()}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#1B99D429",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            // marginBottom: "16px",
                          }}
                        >
                          <CheckIcon
                            fontSize="small"
                            sx={{ color: "#1B99D4" }}
                          />
                        </Box>

                        <Typography
                          className="font-class"
                          fontSize={"14px"}
                          fontWeight={"500"}
                          gutterBottom
                          variant="body1"
                          component="div"
                          sx={{ color: "#5B6165" }}
                        >
                          {desc}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: "6px",
                    marginRight: "6px",
                  }}
                >
                  <Typography
                    variant="h4"
                    className="font-class"
                    fontSize={"24px"}
                    fontWeight={"700"}
                  >
                    ₹{course.price}
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "#1B99D4",
                      textTransform: "capitalize",
                      padding: "8px 30px",
                    }}
                    variant="contained"
                    size="small"
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
