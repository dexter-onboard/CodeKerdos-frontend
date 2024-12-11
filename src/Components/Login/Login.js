import { useContext, useState } from "react";
import "./Login.css";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Body/Body";
import axios from "axios";
import { userDataPushActions } from "src/utils/userSiteActions";
import { USER_SIGN_IN_ACTION } from "src/utils/enum";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [isUser, setIsUser] = useContext(UserContext);

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const handleLogin = () => {
  //   if (username?.current?.value.length === 0) return;
  //   const message = checkValidation(
  //     username?.current?.value,
  //     password?.current?.value
  //   );
  //   setErrorMessage(message);
  //   if (message) return;
  //   else {
  //     setIsUser(true);
  //     localStorage.setItem("user", username?.current?.value);
  //     navigate("/");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = `https://codekerdos.in/api/auth/login`;

      const response = await axios.post(url, {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("studentId", response.data.user._id);
      userDataPushActions(USER_SIGN_IN_ACTION, response.data.user._id);
      navigate("/classroom");
    } catch (err) {
      console.error("Login error:", err);
      setErrorMessage("Failed to sign in. Please check your credentials.");
    } finally {
      setLoading(false);
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
          className="flex flex-col items-center gap-4 p-10 "
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 rounded-lg w-[300px]"
            type="username"
            placeholder="Enter username"
            onChange={(e) => setusername(e.target.value)}
            required
          />
          <input
            className="p-2 rounded-lg w-[300px]"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p className="text-red-500 text-sm">{errorMessage}</p>
          <button
            className="p-2 w-[180px] rounded-lg bg-[#2F5791] text-white"
            // onClick={handleLogin}
            type="submit"
          >
            Login
          </button>
          <p className="text-gray-700">
            ------------------- OR -------------------
          </p>
          {/* <GoogleLogin
            text={isSignIn ? "signin_with" : "signup_with"}
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              setIsUser(true);
              localStorage.setItem("user", username?.current?.value);
              navigate("/");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          /> */}

          <a href="/signup" className="cursor-pointer text-xs text-gray-400">
            {isSignIn
              ? "New to CodeKerdos?? Sign Up Now"
              : "Already have an account...Sign In instead"}
          </a>
        </form>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Login;
