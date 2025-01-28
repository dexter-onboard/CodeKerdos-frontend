import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./partners.css";
import { v4 as uuidv4 } from "uuid";

interface IPartner {
  image: string;
  name: string;
  height: string;
  width: string;
}

const Partners = () => {
  const partners: IPartner[] = [
    {
      image: "/images/acciLive.png",
      name: "AcciLives Private Limited",
      height: "52px",
      width: "216px",
    },
    {
      image: "/images/stoilid.png",
      name: "Stoild Private Limited",
      height: "86px",
      width: "100px",
    },
    {
      image: "/images/matiyari.png",
      name: "Matiyari Technology Pvt. Ltd.",
      height: "70px",
      width: "120px",
    },
    {
      image: "/images/technVibe.png",
      name: "Tech and Vibe",
      height: "90px",
      width: "52px",
    },
  ];

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
          Our partners
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
          <span style={{ color: "#1B99D4" }}>Trusted Partners</span> Driving
          Innovation
        </Typography>
      </Box>

      <Grid
        container
        // spacing={2}
        pl={30}
        justifyContent={"center"}
        alignItems={"center"}
        mt={12}
      >
        {partners.map((partner: IPartner) => (
          <Grid item md={3} key={uuidv4()}>
            <Box width={"260px"} height={"160px"} flexDirection={"column"}>
              <img
                style={{ width: partner.width, height: partner.height }}
                alt={partner.name}
                src={partner.image}
              />
              <Typography
                mt={1}
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#5B6165",
                }}
                className="font-class"
              >
                {partner.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Partners;
