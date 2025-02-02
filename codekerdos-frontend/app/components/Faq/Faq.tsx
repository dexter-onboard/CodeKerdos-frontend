"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faq.css";

interface IFaqData {
  question: string;
  answer: string;
}

const Faq = () => {
  const faqData: IFaqData[] = [
    {
      question: "When will I be eligible for the internship?",
      answer:
        "You will be eligible for the internship after successfully completing the required course modules and meeting the assessment criteria set by CodeKerdos. If you have a strong grasp of your course material, you may apply for internship opportunities as early as few months as well , subject to availability.",
    },
    {
      question: "What is the mode of work for the internship?",
      answer:
        "Our paid internships/ offer flexible work modes, including remote, hybrid, and on-site options, depending on the requirements of the partnering companies and also depends upon the location where you are residing. However, we recommend remote internships as that can save time and money for the candidate.(add for working professionals also )",
    },
    {
      question: "What is the average payout for the internship?",
      answer:
        "Internship stipends vary by role and industry, typically ranging between ₹5,000 and ₹35,000, ensuring competitive compensation aligned with market standards.",
    },
    {
      question: "Can I secure a full-time job after completing the internship?",
      answer:
        "Yes, based on your performance, there are opportunities to transition into full-time roles with our partner companies. We also assist in exploring other opportunities that match your skills and career goals. We even provide you with the recommendation certificate if you have performed well during the internship.",
    },
    {
      question: "How can I pay the course fee with a No-Cost EMI option?",
      answer:
        "We offer a No-Cost EMI payment plan, allowing you to pay the course fee in 2 to 4 installments with zero interest and no hidden charges, ensuring a straightforward and transparent process.",
    },
    {
      question:
        "If I am unable to clear the Mind Test, will I still get an internship?",
      answer:
        "If you don’t clear the Mind Test initially, we will provide additional training and personalized support to help you qualify for internship opportunities. Your growth and success remain our top priority.",
    },
    {
      question: "Who designs the courses at CodeKerdos?",
      answer:
        "Our courses are crafted by industry experts, seasoned professionals, and academic leaders, ensuring alignment with current market demands and trends.",
    },
    {
      question: "What is the duration of the course?",
      answer:
        "Course durations range from 4 to 9 months, offering comprehensive learning experiences and skill development.",
    },
    {
      question: "When was CodeKerdos founded?",
      answer:
        "CodeKerdos was founded in 2023, starting with offline classes in South Delhi, Saket, and Chattarpur. We have since transitioned to an online platform to enhance accessibility and reach.",
    },
    {
      question:
        "How does CodeKerdos ensure guaranteed internships for everyone?",
      answer:
        "We collaborate with leading companies and design our programs to meet industry needs, ensuring students are well-prepared for relevant roles. Our upcoming service-based company, launching in February, will further provide real-world opportunities for our students.",
    },
    {
      question: "What new courses will CodeKerdos offer in the coming months?",
      answer:
        "We will soon introduce new courses in AI, Machine Learning, Data Analytics, Data Science, and more, keeping you equipped with the latest skills in cutting-edge technologies.",
    },
  ];

  return (
    <Box mt={10}>
      <Box textAlign={"center"}>
        <Typography
          className="font-class"
          sx={{ fontSize: "42px", fontWeight: "700" }}
          gutterBottom
          variant="h1"
          component="div"
          mb={6}
          mt={2}
        >
          Frequently Asked
          <span style={{ color: "#1B99D4" }}> Questions</span>
        </Typography>
      </Box>
      <Box
        p={4}
        sx={{
          background: "linear-gradient(90deg, #0E4F6E1A 10%, #1B99D41A 20%)",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={0}
            sm={0}
            md={4}
            display={{ xs: "none", md: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src="/images/faq-banner.svg"
              style={{ height: "260px", width: "auto" }}
              alt="faq-banner"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            {faqData.map((faq: IFaqData, idx: number) => (
              <Box key={uuidv4()} mt={2}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${idx}-content`}
                    id={`panel${idx}-header`}
                  >
                    <Typography
                      className="font-class"
                      sx={{
                        fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        color: "#1E1E1EDE",
                        fontWeight: "500",
                      }}
                      component="span"
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className="font-class"
                      sx={{
                        fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        color: "#1E1E1EDE",
                        fontWeight: "500",
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Faq;
