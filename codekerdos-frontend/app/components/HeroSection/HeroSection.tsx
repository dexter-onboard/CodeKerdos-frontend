import React from "react";
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
} from "@mui/material";
import "./heroSection.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(170deg, #0d1831 60%, #ffffff 60%)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        px: 2,
        py: 8,
      }}
    >
      <Grid
        container
        // spacing={8}
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: "1500px" }}
      >
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component="h1"
            // sx={{
            //   fontWeight: "bold",
            //   color: "#fff",
            // }}
            className="font-class temp"
          >
            Master <span style={{ color: "#f1c40f" }}>Coding</span>,
            <div>
              Transform Your <span style={{ color: "#f1c40f" }}>Career</span>
            </div>
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, color: "rgba(255, 255, 255, 0.8)", fontSize: "20px" }}
            className="font-class"
          >
            Empowering students and professionals with expert-led
            <br />
            courses, real-world projects, and the skills to thrive in a <br />{" "}
            digital world.
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
              >
                Download Brochure
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            p: 4,
            boxShadow: 3,
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
            }}
          >
            Book a free webinar!
          </Typography>
          <form>
            <Grid container direction="column" spacing={4}>
              <Grid item>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item>
                <TextField
                  label="Phone number"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item>
                <FormControl fullWidth size="small">
                  <InputLabel>Select course</InputLabel>
                  <Select label="Select course">
                    <MenuItem value="Web Development">Web Development</MenuItem>
                    <MenuItem value="Data Science">Data Science</MenuItem>
                    <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                <FormControl fullWidth size="small">
                  <InputLabel>Select experience</InputLabel>
                  <Select label="Select experience">
                    <MenuItem value="Beginner">Beginner</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Advanced">Advanced</MenuItem>
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
                >
                  Book a free webinar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
