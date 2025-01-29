"use client";
import { Box } from "@mui/material";
import React from "react";

const PricingBanner = () => {
  return (
    <Box mt={3}>
      <img
        style={{ width: "100vw", height: "auto" }}
        alt="Referral Banner"
        src="/images/pricingBanner.svg"
      />
    </Box>
  );
};

export default PricingBanner;
