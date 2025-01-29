"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CheckIcon from "@mui/icons-material/Check";
import "./courses.css";
import dayjs from "dayjs";
import { openPDFLink } from "@/lib/commonFunctions";
import { brochureLinks, broucherDownloadFormURL } from "@/lib/commonLink";
import { textInputStyles } from "@/lib/commonStyles";
import payNow from "./PaymentScript";
import { IUser } from "@/app/page";

interface ICourse {
  courseID: string;
  title: string;
  description: string[];
  price: string;
  imageURL: string;
  brochureLink: string;
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
    brochureLink: brochureLinks.launchNodeSpringBoot,
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
    brochureLink: brochureLinks.launchMERN,
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
    brochureLink: brochureLinks.launchSpringBoot,
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
    brochureLink: brochureLinks.launchNodeJS,
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
    brochureLink: brochureLinks.launchPythonNode,
  },
];

const Courses = ({ user }: { user: IUser }) => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [selectedBrochure, setSelectedBrochure] = useState<string | null>(null);

  const handleOpenModal = (brochureLink: string) => {
    setSelectedBrochure(brochureLink);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBrochure(null);
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();

    const url = broucherDownloadFormURL;
    fetch(url, {
      //   mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `TimeStamp=${dayjs().format("DD/MM/YYYY HH:mm:ss")}&Name=${
        userData.name
      }&Email=${userData.email}&PhoneNumber=${userData.phone}`,
    })
      .then((res) => res.text())
      .then(() => {
        if (selectedBrochure) {
          openPDFLink(selectedBrochure);
          setTimeout(() => handleClose(), 1000);
        }
        setUserData({
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch((error) => {
        console.log(error);
        handleClose();
      });
  };

  const payNowHandler = (amount: number, description: string) => {
    console.log(
      "payNowHandler",
      amount,
      description,
      user.studentInfo.name,
      user.studentInfo.username,
      user.studentInfo.phoneNumber
    );

    payNow(
      amount,
      "1234",
      description,
      user.studentInfo.name,
      user.studentInfo.username,
      user.studentInfo.phoneNumber
    );
  };

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
          padding: { xs: "24px", md: "32px" },
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
            gap: "30px",
            justifyContent: "space-evenly",
          }}
        >
          {courses &&
            courses?.length > 0 &&
            courses.map((course: ICourse) => (
              <Card
                key={course.courseID}
                sx={{
                  maxWidth: {
                    xs: "100%",
                    sm: "420px",
                    md: "450px",
                    lg: "500px",
                  },
                  borderRadius: "8px",
                }}
              >
                <CardMedia
                  sx={{
                    height: 200,
                    width: { xs: "100%", sm: "400px", md: "425px" },
                  }}
                  image={course.imageURL}
                  title={course.title}
                />

                <CardContent>
                  <Typography
                    className="font-class"
                    fontSize={{ xs: "18px", sm: "20px" }}
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
                          fontSize={{ xs: "13px", sm: "14px" }}
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

                  <Button
                    className="font-class"
                    sx={{
                      textDecoration: "underline",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      fontSize: { xs: "13px", sm: "14px" },
                      color: "#16203B",
                      marginTop: "8px",
                    }}
                    size="medium"
                    onClick={() => handleOpenModal(course.brochureLink)}
                  >
                    Download Brochure
                  </Button>
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
                    fontSize={{ xs: "22px", sm: "24px" }}
                    fontWeight={"700"}
                  >
                    ₹{course.price}
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "#1B99D4",
                      textTransform: "capitalize",
                      padding: { xs: "6px 25px", sm: "8px 30px" },
                    }}
                    variant="contained"
                    size="small"
                    onClick={() =>
                      payNowHandler(Number(course.price), course.description[0])
                    }
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="font-class">Enter Your Details</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            value={userData.name}
            sx={textInputStyles}
            required
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            type="email"
            value={userData.email}
            sx={textInputStyles}
            required
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Phone Number"
            type="tel"
            value={userData.phone}
            sx={textInputStyles}
            required
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              fontSize: "15px",
              fontWeight: "700",
              textTransform: "none",
            }}
            onClick={handleClose}
            className="font-class"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDownload}
            variant="contained"
            className="font-class"
            disabled={!userData.name || !userData.email || !userData.phone}
            sx={{
              fontSize: "15px",
              fontWeight: "700",
              textTransform: "none",
              backgroundColor: "#1B99D4",
              "&:hover": {
                backgroundColor: "#1283b8",
              },
            }}
          >
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Courses;
