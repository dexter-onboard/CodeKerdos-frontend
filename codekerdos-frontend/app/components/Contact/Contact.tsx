"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import { textInputStyles } from "@/lib/commonStyles";
import dayjs from "dayjs";
import { contactFormURL } from "@/lib/commonLink";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveContactFormData = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const url = contactFormURL;
    fetch(url, {
      //   mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `TimeStamp=${dayjs().format("DD/MM/YYYY HH:mm:ss")}&Name=${
        formData.name
      }&Email=${formData.email}&PhoneNumber=${formData.phone}&AdditionalInfo=${
        formData.message
      }`,
    })
      .then((res) => res.text())
      .then(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 6000);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box mt={10} px={8}>
      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#16203B",
              color: "white",
              padding: "2rem",
              borderRadius: "8px",
              overflow: "hidden",
              height: "650px",
              maxWidth: "490px",
              "::before": {
                content: '""',
                position: "absolute",
                width: "150px",
                height: "150px",
                backgroundColor: "#FFF9F926",
                borderRadius: "50%",
                top: "65%",
                right: "7%",
              },
              "::after": {
                content: '""',
                position: "absolute",
                width: "200px",
                height: "200px",
                backgroundColor: "#1b539d25",
                borderRadius: "50%",
                bottom: "-3%",
                right: "-10%",
              },
            }}
          >
            <Typography
              className="font-class"
              sx={{
                fontSize: "28px",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              className="font-class"
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                marginTop: "1rem",
              }}
            >
              Not sure what you need? The team at Codekerdos will be happy to
              listen to you and suggest a course according to your need.
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mt={2}>
              <CallIcon fontSize="medium" />

              <Typography
                className="font-class"
                sx={{
                  fontSize: "16px",
                  color: "#fff",
                  fontWeight: "500",
                }}
                variant="body2"
              >
                <a
                  href="tel:+919266404473"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  +91 92664 04473
                </a>
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <MailIcon fontSize="medium" />
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  color: "#fff",
                  fontWeight: "500",
                }}
                className="font-class"
              >
                <a
                  href="mailto:support@codekerdos.in"
                  style={{ color: "white" }}
                >
                  support@codekerdos.in
                </a>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} paddingRight={10} mt={4}>
          <Box
            sx={{
              margin: "auto",
              padding: "2rem",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              className="font-class"
              fontSize={"30px"}
              fontWeight={"600"}
              color="#1E1E1E"
              gutterBottom
            >
              We’d Love to Hear From You!
            </Typography>
            <Typography
              className="font-class"
              fontSize={"16px"}
              fontWeight={"500"}
              color="#5B6165"
              gutterBottom
            >
              Have questions or need assistance? Reach out to us, and we will
              get back to you promptly.
            </Typography>
            <Box mt={4}>
              <form onSubmit={saveContactFormData}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      sx={textInputStyles}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      sx={textInputStyles}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      type="tel"
                      variant="outlined"
                      sx={textInputStyles}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={textInputStyles}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      className="font-class"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        textTransform: "none",
                        backgroundColor: "#1B99D4",
                        "&:hover": {
                          backgroundColor: "#1283b8",
                        },
                      }}
                      type="submit"
                    >
                      {loading ? "Sending Details..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
              {isSubmitted && (
                <Typography
                  className="font-class"
                  sx={{ textAlign: "center", fontSize: "18px", color: "green" }}
                >
                  We will connect with you shortly.
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
