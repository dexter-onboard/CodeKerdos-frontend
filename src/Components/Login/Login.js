import React, { useContext, useRef, useState } from "react";
import "./Login.css";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { GoogleLogin } from "@react-oauth/google";
import { checkValidation } from "src/utils/validation";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Body/Body";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const phone = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [isUser, setIsUser] = useContext(UserContext);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleLogin = () => {
    if (email?.current?.value.length === 0) return;
    const message = checkValidation(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    if (message) return;
    else {
      setIsUser(true);
      localStorage.setItem("user", email?.current?.value);
      navigate("/");
    }
  };

  const handleSignUp = () => {
    if (email?.current?.value.length === 0) return;
    if (password?.current?.value !== confirmPassword?.current?.value) {
      setErrorMessage("Passwords dont match");
      return;
    }
    const message = checkValidation(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    if (message) return;
    else {
      setIsUser(true);
      localStorage.setItem("user", email?.current?.value);
      navigate("/");
    }
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="loginForm bg-slate-900 w-1/3 py-10 rounded-md min-w-[500px]">
        <form
          className="flex flex-col items-center gap-4 p-10 "
          onSubmit={(e) => e.preventDefault()}
        >
          {!isSignIn && (
            <input
              className="p-2 rounded-lg w-[300px]"
              type="text"
              placeholder="Enter Name"
              ref={name}
              required
            />
          )}
          {!isSignIn && (
            <input
              className="p-2 rounded-lg w-[300px]"
              type="tel"
              placeholder="Enter Mobile Number"
              ref={phone}
              required
            />
          )}
          <input
            className="p-2 rounded-lg w-[300px]"
            type="email"
            placeholder="Enter Email"
            ref={email}
            required
          />
          <input
            className="p-2 rounded-lg w-[300px]"
            type="password"
            placeholder="Enter your password"
            ref={password}
            required
          />
          {!isSignIn && (
            <input
              className="p-2 rounded-lg w-[300px]"
              type="password"
              placeholder="Enter confirm password"
              ref={confirmPassword}
              required
            />
          )}
          <p className="text-red-500 text-sm">{errorMessage}</p>
          <button
            className="p-2 w-[180px] rounded-lg bg-[#3B81F6] text-white"
            onClick={isSignIn ? handleLogin : handleSignUp}
          >
            {isSignIn ? "Login" : "Sign Up"}
          </button>
          <p className="text-gray-700">
            ------------------- OR -------------------
          </p>
          <GoogleLogin
            text={isSignIn ? "signin_with" : "signup_with"}
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              setIsUser(true);
              localStorage.setItem("user", email?.current?.value);
              navigate("/");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />

          <p
            onClick={toggleSignIn}
            className="cursor-pointer text-xs text-gray-400"
          >
            {isSignIn
              ? "New to CodeKerdos?? Sign Up Now"
              : "Already have an account...Sign In instead"}
          </p>
        </form>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Login;
