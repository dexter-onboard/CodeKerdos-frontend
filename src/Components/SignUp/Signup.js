import React, { useContext, useRef, useState } from "react";
import "../Login/Login.css";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Body/Body";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = async () => {
    const { name, phoneNumber, username, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    try {
      const url = `${process.env.REACT_APP_BACKEND_API_URL}/auth/register`;
      const response = await axios.post(url, {
        name,
        phoneNumber,
        username,
        password,
      });

      if (response.status === 201) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setErrorMessage(response.data.message || "Sign up failed.");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred during signup."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="loginForm bg-slate-900 w-1/3 py-10 rounded-md min-w-[500px]">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 p-2 rounded-full hover:bg-slate-600 text-white"
        >
          <i class="fas fa-arrow-left"></i>
        </button>

        <form
          className="flex flex-col items-center gap-4 p-10"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <input
            className="p-2 rounded-lg w-[300px]"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
          <input
            className="p-2 rounded-lg w-[300px]"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            required
          />
          <input
            className="p-2 rounded-lg w-[300px]"
            type="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
          <input
            className="p-2 rounded-lg w-[300px]"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          <input
            className="p-2 rounded-lg w-[300px]"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Enter confirm password"
            required
          />
          <p className="text-red-500 text-sm">{errorMessage}</p>
          <button
            className="p-2 w-[180px] rounded-lg bg-[#3B81F6] text-white"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Signup;
