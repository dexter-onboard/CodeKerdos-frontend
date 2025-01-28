"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Navigation } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import { navButtonStyle } from "@/lib/commonStyles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SwiperCore from "swiper";
import { openPDFLink } from "@/lib/commonFunctions";

interface IProfile {
  name: string;
  designation: string;
  image: string;
  linkedInUrl: string;
}

const Team = () => {
  const profileData: IProfile[] = [
    {
      name: "Yogesh Sharma",
      designation: "CEO & Founder at Codekerdos",
      image: "/images/yogesh.png",
      linkedInUrl: "https://www.linkedin.com/in/yogeshsharmacode/",
    },

    {
      name: "Naman Jindal",
      designation: "Full-Stack JS Developer",
      image: "/images/naman.png",
      linkedInUrl: "https://www.linkedin.com/in/namanjindal/",
    },
    {
      name: "Shivansh Jaitly",
      designation: "App Engineering Senior Analyst",
      image: "/images/shivansh.png",
      linkedInUrl: "https://www.linkedin.com/in/shivansh-jaitly/",
    },
    {
      name: "Hitesh Sharma",
      designation: "Lead Blockchain Engineer",
      image: "/images/hitesh.png",
      linkedInUrl: "https://www.linkedin.com/in/hiteshsharma6/",
    },
    {
      name: "Kiran Rawat",
      designation: "Senior Software Engineer",
      image: "/images/kiran.png",
      linkedInUrl: "https://www.linkedin.com/in/kiran-rawat4/",
    },

    {
      name: "Harshit Gupta",
      designation: "Data Engineer",
      image: "/images/harshit.png",
      linkedInUrl: "https://www.linkedin.com/in/harshit-gupta-a55855175/",
    },

    {
      name: "Mainak Chakrabortty",
      designation: "Staff Software Engineer",
      image: "/images/mainak.png",
      linkedInUrl: "http://linkedin.com/in/mainak-chakrabortty/",
    },

    {
      name: "Sudhendra singh",
      designation: "Full-stack Developer",
      image: "/images/Sudhendra-singh.png",
      linkedInUrl: "https://www.linkedin.com/in/sudhendra-singh-168831130/",
    },

    {
      name: "Ajay Joshi",
      designation: "SDE-2",
      image: "/images/ajay.png",
      linkedInUrl: "https://www.linkedin.com/in/ajay02/",
    },

    {
      name: "Shubham Gupta",
      designation: "Indian Institute of Technology Hyderabad",
      image: "/images/shubham.png",
      linkedInUrl: "https://www.linkedin.com/in/shubham-gupta-417a92194/",
    },

    {
      name: "Anshu Rai",
      designation: "SDE-2",
      image: "/images/anshu.png",
      linkedInUrl: "https://www.linkedin.com/in/anshurai89/",
    },

    {
      name: "Shubham Jain",
      designation: "Team Manager",
      image: "/images/shubham-jain.png",
      linkedInUrl: "https://www.linkedin.com/in/shubham-jain98/",
    },
  ];

  const [teamSwiperRef, setTeamSwiperRef] = useState<SwiperCore | null>(null);

  const goToNextSlide = () => {
    if (teamSwiperRef) {
      teamSwiperRef.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (teamSwiperRef) {
      teamSwiperRef.slidePrev();
    }
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
          Faculty
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
          Meet Our <span style={{ color: "#1B99D4" }}>Expert Instructors</span>
        </Typography>
      </Box>

      <Box
        sx={{
          background: "linear-gradient(90deg, #0E4F6E1A 10%, #1B99D41A 20%)",
          padding: "20px",
        }}
      >
        <Box
          px={5}
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <IconButton
            className="team-swiper-prev"
            sx={{ ...navButtonStyle, left: 0 }}
            onClick={goToPrevSlide}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            className="team-swiper-next"
            sx={{ ...navButtonStyle, right: 0 }}
            onClick={goToNextSlide}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          <Swiper
            slidesPerView={4}
            onSwiper={setTeamSwiperRef}
            navigation={{
              nextEl: ".team-swiper-next",
              prevEl: ".team-swiper-prev",
            }}
            modules={[Navigation]}
            className="team-swiper"
          >
            {profileData.map((profile: IProfile) => (
              <SwiperSlide style={{ padding: "2px" }} key={uuidv4()}>
                <Card
                  sx={{
                    maxWidth: 345,
                    borderRadius: 1,
                    boxShadow: "4",
                  }}
                >
                  <CardMedia
                    component="img"
                    //   height="140"
                    image={profile.image}
                    alt="Profile Picture"
                    sx={{
                      width: "100%",
                    }}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                      className="font-class"
                      textAlign={"left"}
                    >
                      {profile.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      mt={1}
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#5B6165",
                      }}
                      className="font-class"
                    >
                      {profile.designation}
                    </Typography>
                    <Button
                      className="font-class"
                      startIcon={<LinkedInIcon />}
                      onClick={() => openPDFLink(profile.linkedInUrl)}
                      sx={{
                        marginTop: "10px",
                        textTransform: "none",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#006DD9",
                      }}
                    >
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
