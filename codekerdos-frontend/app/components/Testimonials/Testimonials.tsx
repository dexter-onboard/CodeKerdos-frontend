"use client";
import {
  Avatar,
  Box,
  Card,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Navigation } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { navButtonStyle } from "@/lib/commonStyles";
import SwiperCore from "swiper";

interface ITestimonial {
  quote: string;
  name: string;
  rating: number;
  image: string;
  linkedInLink: string;
}

const Testimonials = () => {
  const testimonials: ITestimonial[] = [
    {
      quote:
        "Joining this course has been a game-changer for me! The hands-on training and practical projects have boosted my skills and confidence. With the personalized guidance and support, I'm now fully prepared to secure an internship and kickstart my career. I couldn’t have asked for a better learning experience!",
      name: "Gulshan Kashyap",
      rating: 5,
      image: "/images/Gulshan-avatar.png",
      linkedInLink: "",
    },

    {
      quote:
        "The live classes have been incredibly helpful for me! Having a great instructor guiding us in real-time made all the difference. It allowed me to ask questions, get instant feedback, and truly understand the concepts. This interactive approach is so much better than just watching recorded lectures",
      name: "Mayank Jain",
      rating: 5,
      image: "/public/images/mayank-avatar.png",
      linkedInLink: "",
    },

    {
      quote:
        "This course is perfect for both beginners and advanced learners. It helped me build a solid foundation and explore advanced concepts relevant to my job. The practical approach with real-world examples boosted my skills, allowing me to excel in my role. Highly recommended!",
      name: "Priya Kashyap",
      rating: 5,
      image: "/images/priya-avatar.png",
      linkedInLink: "",
    },

    {
      quote:
        "As someone from a non-IT background, I was nervous about tech, but CodeKerdos made it seamless. Starting with basics, I gained confidence and built industry-grade projects. Now, with a strong portfolio and skills, I have multiple job opportunities. Life-changing!",
      name: "Arvind Agrawal",
      rating: 5,
      image: "/images/arvind-avatar.png",
      linkedInLink: "",
    },

    {
      quote:
        "Struggling to find structured learning, I joined CodeKerdos’ Full Stack course. Supportive mentors and live projects made learning practical and fun. An internship afterward helped apply my skills, build confidence, and grow my portfolio. Highly recommend for a tech career!",
      name: "Saksham Agrawal",
      rating: 5,
      image: "/images/saksham-avatar.png",
      linkedInLink: "",
    },

    {
      quote:
        "CodeKerdos stands out for its dedication to solving every student’s challenges, from technical doubts to career guidance. Their genuine support and care kept me motivated, helping me overcome obstacles and achieve my goals. They truly ensure no student is left behind!",
      name: "Sweta kumari",
      rating: 5,
      image: "/images/sweta-avatar.png",
      linkedInLink: "",
    },

    {
      quote:
        "The hands-on projects at CodeKerdos were transformative. They weren’t just exercises but real-world tasks that deepened my full-stack development skills. During placements, these projects helped me confidently showcase my abilities, making me stand out in interviews. Grateful to CodeKerdos!",
      name: "Jhanhavi Srivastava",
      rating: 5,
      image: "/images/jahnv-avatar.png",
      linkedInLink: "",
    },
  ];

  const [testimonialSwiperRef, setSwiperReftestimonial] =
    useState<SwiperCore | null>(null);

  const goToNextSlide = () => {
    if (testimonialSwiperRef) {
      testimonialSwiperRef.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (testimonialSwiperRef) {
      testimonialSwiperRef.slidePrev();
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
          Testimonials
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
          What Our <span style={{ color: "#1B99D4" }}>Students Says</span>
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
          className="testimonial-swiper-prev"
          sx={{ ...navButtonStyle, left: 0 }}
          onClick={goToPrevSlide}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          className="testimonial-swiper-next"
          sx={{ ...navButtonStyle, right: 0 }}
          onClick={goToNextSlide}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Swiper
          slidesPerView={4}
          onSwiper={setSwiperReftestimonial}
          navigation={{
            nextEl: ".testimonial-swiper-next",
            prevEl: ".testimonial-swiper-prev",
          }}
          modules={[Navigation]}
          className="testimonials-swiper"
          breakpoints={{
            1500: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 3,
            },
            1366: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {testimonials.map((testimonial: ITestimonial) => (
            <SwiperSlide style={{ padding: "2.5rem" }} key={uuidv4()}>
              <Card
                sx={{
                  maxWidth: 370,
                  width: "auto",
                  height: "500px",
                  borderRadius: "8px",
                  boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  padding: 2,
                  textAlign: "center",
                  backgroundColor: "#F8FBFB",
                }}
              >
                <Box height={360}>
                  <Box mb={2}>
                    <Image
                      width="20"
                      height="20"
                      alt="double-quotes-"
                      src="/images/double-quotes-icon.png"
                    />
                  </Box>

                  <Typography
                    component="blockquote"
                    className="font-class"
                    sx={{
                      fontSize: "18px",
                      color: "#5B6165",
                      fontWeight: "500",
                    }}
                    lineHeight={"36px"}
                    textAlign={"left"}
                    mb={4}
                  >
                    &ldquo;{testimonial.quote}&ldquo;
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    mt: 2,
                  }}
                >
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box ml={2} textAlign="left">
                    <Rating value={testimonial.rating} readOnly size="small" />
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
