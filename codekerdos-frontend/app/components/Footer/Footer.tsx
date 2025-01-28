"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import "./footer.css";
import Image from "next/image";
import { handleScrollToSection, openPDFLink } from "@/lib/commonFunctions";
import { privacyPolicy, socialMediaLinks, termsNCond } from "@/lib/commonLink";

const Footer = () => {
  const footerBtnStyle = {
    fontSize: "16px",
    fontWeight: "400",
    textTransform: "none",
    color: "#FCF9F9",
    "&:hover": {
      textDecoration: "underline",
    },
  };

  return (
    <Box
      component="footer"
      mt={6}
      sx={{
        backgroundColor: "#16203B",
        color: "white",
        py: 4,
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={1}
        mb={4}
      >
        <img
          src="/images/footer-logo.png"
          alt="Logo"
          style={{ height: "40px", width: "auto" }}
        />
      </Box>
      <Grid container spacing={4} justifyContent={"center"}>
        <Grid item xs={7}>
          <Grid container>
            <Grid item xs={3} display={"flex"} flexDirection={"column"} gap={2}>
              <Box display="flex" alignItems="center" gap={1}>
                <MailIcon fontSize="small" />
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#FCF9F9",
                    fontWeight: "400",
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
              <Box display="flex" alignItems="center" gap={1} mt={2}>
                <CallIcon fontSize="small" />

                <Typography
                  className="font-class"
                  sx={{
                    fontSize: "16px",
                    color: "#FCF9F9",
                    fontWeight: "400",
                  }}
                >
                  <a
                    href="tel:+919266404473"
                    style={{ color: "white", textDecoration: "underline" }}
                  >
                    +91 92664 04473
                  </a>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={3} display={"flex"} flexDirection={"column"} gap={2}>
              <Box>
                <Button
                  onClick={() => handleScrollToSection("courses")}
                  className="font-class"
                  sx={footerBtnStyle}
                  size="small"
                >
                  Our Courses
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={() => openPDFLink(privacyPolicy)}
                  className="font-class"
                  sx={footerBtnStyle}
                  size="small"
                >
                  Privacy Policy
                </Button>
              </Box>
            </Grid>

            <Grid item xs={3} display={"flex"} flexDirection={"column"} gap={2}>
              <Box>
                <Button
                  className="font-class"
                  sx={footerBtnStyle}
                  size="small"
                  onClick={() => handleScrollToSection("offerings")}
                >
                  Benefits
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={() => openPDFLink(termsNCond)}
                  className="font-class"
                  sx={footerBtnStyle}
                  size="small"
                >
                  Terms & Conditions
                </Button>
              </Box>
            </Grid>

            <Grid item xs={3} display={"flex"} flexDirection={"column"} gap={2}>
              <Box>
                <Button
                  onClick={() => handleScrollToSection("testimonials")}
                  className="font-class"
                  sx={footerBtnStyle}
                  size="small"
                >
                  Our Testimonials
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={3}>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#FCF9F9",
              fontWeight: "400",
            }}
            className="font-class"
            gutterBottom
          >
            Social Profiles
          </Typography>
          <Box display="flex" gap={1}>
            <IconButton
              onClick={() => openPDFLink(socialMediaLinks.facebook)}
              sx={{ border: "1px solid #F1F1F3", p: 1, borderRadius: 2 }}
            >
              <Image
                src="/images/facebook.png"
                width={26}
                height={26}
                alt="facebook"
              />
            </IconButton>
            <IconButton
              onClick={() => openPDFLink(socialMediaLinks.instagram)}
              sx={{ border: "1px solid #F1F1F3", p: 1, borderRadius: 2 }}
            >
              <Image
                src="/images/instagram.png"
                width={26}
                height={26}
                alt="instagram"
              />
            </IconButton>
            <IconButton
              onClick={() => openPDFLink(socialMediaLinks.linkedin)}
              sx={{ border: "1px solid #F1F1F3", p: 1, borderRadius: 2 }}
            >
              <Image
                src="/images/linkedin.png"
                width={26}
                height={26}
                alt="linkedin"
              />
            </IconButton>
            <IconButton
              onClick={() => openPDFLink(socialMediaLinks.youtube)}
              sx={{ border: "1px solid #F1F1F3", p: 1, borderRadius: 2 }}
            >
              <Image
                src="/images/youtube.png"
                width={26}
                height={26}
                alt="youtube"
              />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box mt={3} px={4}>
        <Divider
          sx={{
            borderColor: "#F1F1F3",
          }}
        />
      </Box>

      <Box mt={3} textAlign="center">
        <Typography
          sx={{
            fontSize: "14px",
            color: "#FCF9F9",
            fontWeight: "400",
          }}
          className="font-class"
        >
          © 2024 Codekerdos. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
