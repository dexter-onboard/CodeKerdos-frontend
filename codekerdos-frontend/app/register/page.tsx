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
import { useRouter } from "next/navigation";
import { textInputStyles } from "@/lib/commonStyles";
import axios from "axios";
import { registerUrl } from "@/lib/commonLink";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    const url = registerUrl;
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    try {
      const response = await axios.post(url, {
        name,
        username: email,
        password,
        phoneNumber,
      });
      if (response.status === 201) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setSuccessMessage("Sign-up successful! Redirecting...");
        setTimeout(() => router.push("/login"), 3000);
      } else {
        setErrorMessage(response.data.message || "Sign up failed.");
      }
    } catch {
      setErrorMessage("Something went wrong");
      setTimeout(() => setErrorMessage(""), 3000);
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
        width={600}
        p={3}
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
          Welcome to Codekerdos
        </Typography>
        <Typography
          mt={1}
          fontSize="14px"
          color="#A6A6A6"
          className="font-class"
        >
          Platform to Learn, code, and grow with expert guidance.
        </Typography>
        <Box
          mt={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography fontSize="14px" color="#A6A6A6" className="font-class">
            Already have account?
          </Typography>
          <Button
            sx={{
              fontSize: "14px",
              color: "#1B99D4",
              fontWeight: "600",
              textTransform: "none",
            }}
            className="font-class"
            onClick={() => router.push("/signIn")}
          >
            Log In
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

        <Box mt={2}>
          <TextField
            sx={textInputStyles}
            fullWidth
            label="Enter name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
          <TextField
            sx={textInputStyles}
            fullWidth
            label="Enter email"
            margin="normal"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
          <TextField
            sx={textInputStyles}
            fullWidth
            label="Enter phone number"
            margin="normal"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            autoComplete="off"
          />
          <TextField
            sx={textInputStyles}
            fullWidth
            label="Enter password"
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
          <TextField
            sx={textInputStyles}
            fullWidth
            label="Confirm password"
            margin="normal"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
              mt: 2,
            }}
            className="font-class"
            onClick={handleSignUp}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
