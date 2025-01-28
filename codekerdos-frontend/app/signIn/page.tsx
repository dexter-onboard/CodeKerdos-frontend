"use client";
import {
  Alert,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./signin.css";
import { textInputStyles } from "@/lib/commonStyles";
import { loginUrl } from "@/lib/commonLink";
import axios from "axios";
import { useRouter } from "next/navigation";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = loginUrl;

      const response = await axios.post(url, {
        username: email,
        password,
      });
      setSuccessMessage("Login successful!");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("studentId", response.data.user._id);
      setTimeout(() => router.push("/"), 3000);
    } catch {
      setErrorMessage("Failed to sign in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage: 'url("/images/auth-bg.svg")',
        backgroundSize: "cover",
      }}
    >
      <Box
        width={500}
        p={4}
        borderRadius={2}
        bgcolor="white"
        boxShadow={3}
        textAlign="center"
      >
        <Box display={"flex"} justifyContent={"start"}>
          <IconButton color="primary" onClick={() => router.push("/")}>
            <ArrowBackRoundedIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography className="font-class" fontSize="32px" fontWeight="700">
          Welcome Back!
        </Typography>
        <Box
          mt={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography fontSize="14px" color="#A6A6A6" className="font-class">
            Don&apos;t have an account yet?
          </Typography>
          <Button
            sx={{
              fontSize: "14px",
              color: "#1B99D4",
              fontWeight: "600",
              textTransform: "none",
            }}
            className="font-class"
            onClick={() => router.push("/register")}
          >
            Sign Up Now
          </Button>
        </Box>

        {successMessage && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {successMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {errorMessage}
          </Alert>
        )}

        <form onSubmit={handleLogin}>
          <Box mt={2}>
            <TextField
              sx={textInputStyles}
              fullWidth
              label="Enter email"
              margin="normal"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <TextField
              sx={textInputStyles}
              fullWidth
              label="Enter password"
              margin="normal"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            ></Box>
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                fontSize: "16px",
                backgroundColor: "#1B99D4",
                color: "#fff",
                fontWeight: "600",
                textTransform: "none",
                mt: 1,
              }}
              className="font-class"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Page;
