"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./bookFreeWebinarPopover.css";

const BookFreeWebinarPopover = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 5,
        width: "90vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: "#184279",
          borderRadius: "30px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "20px",
          width: {
            xs: "75%",
            md: "55%",
            lg: "45%",
            xl: "30%",
          },
        }}
      >
        <Typography
          className="font-class"
          sx={{ fontSize: "16px", fontWeight: "500" }}
        >
          Hurry up! Limited seats are available
        </Typography>
        <Button
          className="font-class"
          variant="contained"
          onClick={scrollToTop}
          size="small"
          sx={{
            backgroundColor: "#FFD60F",
            color: "#184279",
            fontWeight: "bold",
            borderRadius: "4px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#e8c30a",
            },
          }}
        >
          Book Free Demo
        </Button>
      </Box>
    </Box>
  );
};

export default BookFreeWebinarPopover;
