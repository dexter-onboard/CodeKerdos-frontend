"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  SelectChangeEvent,
} from "@mui/material";
import "./heroSection.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { textInputStyles } from "@/lib/commonStyles";
import dayjs from "dayjs";
import { bookingFormURL, codekerdosPPT } from "@/lib/commonLink";
import { openPDFLink } from "@/lib/commonFunctions";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    course: "",
    experience: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveFreeWebinarBookingData = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);

    const url = bookingFormURL;
    fetch(url, {
      //   mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `TimeStamp=${dayjs().format("DD/MM/YYYY HH:mm:ss")}&Name=${
        formData.name
      }&Email=${formData.email}&Phone=${formData.phoneNumber}&Course=${
        formData.course
      }&Experience=${formData.experience}`,
    })
      .then((res) => res.text())
      .then(() => {
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          course: "",
          experience: "",
        });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 6000);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(170deg, #0d1831 60%, #ffffff 60%)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        px: { xs: 2, md: 4 },
        py: { xs: 6, md: 8 },
      }}
    >
      <Grid
        container
        // spacing={8}
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: "1500px" }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
            className="font-class"
          >
            Master <span style={{ color: "#f1c40f" }}>Coding</span>,
            <div>
              Transform Your <span style={{ color: "#f1c40f" }}>Career</span>
            </div>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
            }}
            className="font-class"
          >
            At Codekerdos, we equip learners with expert-led courses, hands-on
            projects, and AI-integrated web development, empowering them with
            real-world skills to excel in their careers.
            {/* Empowering students and professionals with expert-led
            <br />
            courses, real-world projects, and the skills to thrive in a <br />{" "}
            digital world. */}
          </Typography>

          <Grid container>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  mt: 5,
                  backgroundColor: "#fff",
                  color: "#184279",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                  fontSize: "18px",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  padding: "7px 14px",
                }}
                className="font-class"
                startIcon={<FileDownloadOutlinedIcon />}
                onClick={() => openPDFLink(codekerdosPPT)}
              >
                Know About Us!
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            p: { xs: 3, md: 4 },
            boxShadow: 3,
            width: "100%",
            maxWidth: { xs: "100%", md: "450px" },
          }}
        >
          <Typography
            variant="h4"
            mb={3}
            textAlign={"center"}
            sx={{
              fontWeight: "800",
              color: "#0d1831",
              fontFamily: "var(--font-main)",
              fontSize: { xs: "1.5rem", md: "1.8rem" },
            }}
          >
            Book a free live webinar!
          </Typography>

          {!isSubmitted ? (
            <form onSubmit={handleSaveFreeWebinarBookingData}>
              <Grid container direction="column" spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    sx={textInputStyles}
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={textInputStyles}
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Phone number"
                    variant="outlined"
                    fullWidth
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    sx={textInputStyles}
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth sx={textInputStyles}>
                    <InputLabel>Select course</InputLabel>
                    <Select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      label="Select course"
                    >
                      <MenuItem
                        className="font-class"
                        value="LaunchPad Nodejs & SpringBoot"
                      >
                        LaunchPad Nodejs & SpringBoot
                      </MenuItem>
                      <MenuItem
                        className="font-class"
                        value="MERN Stack Development"
                      >
                        MERN Stack Development
                      </MenuItem>
                      <MenuItem
                        className="font-class"
                        value="FullStack Launchpad (Spring Boot)"
                      >
                        FullStack Launchpad (Spring Boot)
                      </MenuItem>
                      <MenuItem
                        className="font-class"
                        value="FullStack Launchpad (Node.js)"
                      >
                        FullStack Launchpad (Node.js)
                      </MenuItem>
                      <MenuItem
                        className="font-class"
                        value="LaunchPad Python & Nodejs"
                      >
                        LaunchPad Python & Nodejs
                      </MenuItem>
                      <MenuItem
                        className="font-class"
                        value="Full Stack with Spring Boot"
                      >
                        Full Stack with Spring Boot
                      </MenuItem>
                      <MenuItem
                        className="font-class"
                        value="Full Stack with Node.js"
                      >
                        Full Stack with Node.js
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth sx={textInputStyles}>
                    <InputLabel>Select experience</InputLabel>
                    <Select
                      label="Select experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                    >
                      <MenuItem className="font-class" value="Beginner">
                        Beginner
                      </MenuItem>
                      <MenuItem className="font-class" value="Intermediate">
                        Intermediate
                      </MenuItem>
                      <MenuItem className="font-class" value="Advanced">
                        Advanced
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    className="font-class"
                    size="large"
                    sx={{
                      backgroundColor: "#184279",
                      color: "white",
                      borderRadius: "4px",
                      "&:hover": { backgroundColor: "#172a45" },
                      textTransform: "capitalize",
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? "Booking..." : "Book a free webinar"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          ) : (
            <Typography
              className="font-class"
              sx={{ textAlign: "center", fontSize: "18px", color: "green" }}
            >
              Booking done! Thank you. Details will be shared to you shortly.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
