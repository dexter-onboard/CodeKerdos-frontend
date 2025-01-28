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
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
// import { useState } from "react";
import "./courses.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Navigation } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { openPDFLink } from "@/lib/commonFunctions";
import { brochureLinks, broucherDownloadFormURL } from "@/lib/commonLink";
import SwiperCore from "swiper";
import { textInputStyles } from "@/lib/commonStyles";
import dayjs from "dayjs";

interface IShortCourse {
  title: string;
  description: string;
  brochureLink: string;
  price: string;
  imageURL: string;
}

const ShortCourses = () => {
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

  const [courseSwiperRef, setCourseSwiperRef] = useState<SwiperCore | null>(
    null
  );

  const navButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1000,
    backgroundColor: "#f1c40f",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    "&:hover": { backgroundColor: "#E0E0E0" },
  };

  const shortCourses: IShortCourse[] = [
    {
      title: "C Programming",
      description:
        "Master the fundamentals of C programming with a focus on syntax, pointers, and memory management in just 1.5 months course.",
      brochureLink: brochureLinks.shortHandC,
      price: "₹ 10,000",
      imageURL: "/images/short-c.svg",
    },
    {
      title: "C++ Programming",
      description:
        "Learn object-oriented programming with classes, inheritance, and polymorphism in just 1.5 month course.",
      brochureLink: brochureLinks.shortHandCPlus,
      price: "₹ 10,000",
      imageURL: "/images/short-c++.svg",
    },
    {
      title: "Java Programming",
      description:
        "Dive into Java's advanced features like multithreading and collections in just 1.5 month course.",
      brochureLink: brochureLinks.shortHandJava,
      price: "₹ 10,000",
      imageURL: "/images/short-java.svg",
    },
    {
      title: "Python Programming",
      description:
        "Explore Python's versatility for web development, data analysis, and machine learning in just 1.5 month course.",
      brochureLink: brochureLinks.shortHandPython,
      price: "₹ 10,000",
      imageURL: "/images/short-python.svg",
    },
    {
      title: "DSA in C",
      description:
        "Combine core C with DSA concepts, perfect for technical interview preparation in just 2.5 month course.",
      brochureLink: brochureLinks.shortHandC_DSA,
      price: "₹ 10,000",
      imageURL: "/images/short-c-dsa.svg",
    },
    {
      title: "DSA in C++",
      description:
        "Learn C++ with comprehensive DSA concepts for competitive programming and tech jobs in just 2.5 month course.",
      brochureLink: brochureLinks.shortHandCPlusDSA,
      price: "₹ 10,000",
      imageURL: "/images/short-c++-dsa.svg",
    },
    {
      title: "DSA in Java",
      description:
        "Gain expertise in Java and DSA with a focus on problem-solving for software development in just 2.5 month course.",
      brochureLink: brochureLinks.shortHandJava_DSA,
      price: "₹ 10,000",
      imageURL: "/images/short-java-dsa.svg",
    },

    {
      title: "DSA in Python",
      description:
        "Master Python and DSA for data science, AI/ML, and technical interviews in just 2.5 month course.",
      brochureLink: brochureLinks.shortHandPython_DSA,
      price: "₹ 10,000",
      imageURL: "/images/short-python-dsa.svg",
    },
    {
      title: "Full Stack with Node.js",
      description:
        "Learn front-end (HTML, CSS, JavaScript) and back-end (Node.js) to build dynamic web applications in 5-6 months.",
      brochureLink: brochureLinks.shortHandMern,
      price: "₹ 10,000",
      imageURL: "/images/short-fullstack-node.svg",
    },
    {
      title: "Full Stack with Spring Boot",
      description:
        "Master enterprise-level development with Spring Boot and front-end technologies in 5-6 months.",
      brochureLink: brochureLinks.shortHandSpring,
      price: "₹ 10,000",
      imageURL: "/images/short-fullstack-spring.svg",
    },
  ];

  const goToNextSlide = () => {
    if (courseSwiperRef) {
      courseSwiperRef.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (courseSwiperRef) {
      courseSwiperRef.slidePrev();
    }
  };

  return (
    <Box mt={12}>
      <Box textAlign={"center"}>
        <Typography
          className="font-class"
          sx={{ fontSize: "20px", color: "#5B6165", fontWeight: "600" }}
          gutterBottom
          variant="h6"
          component="div"
        >
          Short Courses
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
          Accelerate Learning With{" "}
          <span style={{ color: "#1B99D4" }}>Shorthand Courses</span>
        </Typography>
      </Box>

      <Box
        px={5}
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <IconButton
          className="course-swiper-prev"
          sx={{ ...navButtonStyle, left: 0 }}
          onClick={goToPrevSlide}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          className="course-swiper-next"
          sx={{ ...navButtonStyle, right: 0 }}
          onClick={goToNextSlide}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Swiper
          slidesPerView={4}
          onSwiper={setCourseSwiperRef}
          navigation={{
            nextEl: ".course-swiper-next",
            prevEl: ".course-swiper-prev",
          }}
          modules={[Navigation]}
          className="short-courses-swiper"
          breakpoints={{
            1366: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {shortCourses.map((shortCourse: IShortCourse) => (
            <SwiperSlide style={{ padding: "2px" }} key={uuidv4()}>
              <Card
                sx={{
                  width: "auto",
                  maxWidth: {
                    xs: "350px",
                    md: "350px",
                    lg: "350px",
                    xl: "430px",
                  },
                  height: "450px",
                  boxShadow: 3,
                  borderRadius: "8px",
                }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  image={shortCourse.imageURL}
                  alt={shortCourse.title}
                />
                <CardContent>
                  <Typography
                    className="font-class"
                    fontWeight="500"
                    fontSize={"20px"}
                  >
                    {shortCourse.title}
                  </Typography>
                  <Typography
                    className="font-class"
                    fontWeight="400"
                    fontSize={"14px"}
                    color="#5B6165"
                    sx={{ display: "flex", alignItems: "start", mt: 2 }}
                  >
                    <SchoolOutlinedIcon
                      fontSize="small"
                      sx={{ mr: 1, color: "#5B6165" }}
                    />
                    {shortCourse.description}
                  </Typography>

                  <Button
                    className="font-class"
                    sx={{
                      textDecoration: "underline",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "#16203B",
                      marginTop: "8px",
                    }}
                    size="medium"
                    onClick={() => handleOpenModal(shortCourse.brochureLink)}
                  >
                    Download Brochure
                  </Button>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "space-between", padding: "16px" }}
                >
                  <Typography
                    className="font-class"
                    variant="h6"
                    fontWeight="bold"
                  >
                    {shortCourse.price}
                  </Typography>
                  <Button
                    className="font-class"
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#fff",
                      backgroundColor: "#1B99D4",
                      padding: "6px 16px",
                    }}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default ShortCourses;
