import React, { useContext } from "react";
import "./Navbar.css"; // Import the CSS file
// import logoImg from "../images/logo-no-background.png";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Body/Body";
// import UserAvatar from "../UserAvatar";
import { IconButton, Tooltip } from "@mui/material";
import { ArrowOutwardRounded } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  const [isUser, setIsUser] = useContext(UserContext);
  const toggleShowLogin = () => {
    navigate("/login");
  };
  const toggleShowLogout = () => {
    setIsUser(false);
    localStorage.setItem("user", null);
    navigate("/login");
  };

  const handleClassroom = () => {
    if (localStorage.getItem("user") !== "null") navigate("/classroom");
    else navigate("/login");
  };
  return (
    <nav className="navbar relative overflow-hidden flex flex-col">
      <div className="flex w-full justify-between items-center">
        <div className="navbar-logo relative z-10">
          {" "}
          {/* Ensure the logo is on top */}
          {/* <img className="h-[70px] w-[70px] mr-2" src={logoImg} alt="logo" /> */}
          <div className="title flex">C</div>
          <div className="codepen-logo">
            o{/* Use FontAwesome icon class */}
          </div>
          <div className="title right-l">
            <span className="de">de</span>Kerdos
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <Tooltip title={localStorage.getItem("user")} placement="bottom">
            <IconButton>
              {/* <UserAvatar /> */}
            </IconButton>
          </Tooltip>
          <button
            onClick={handleClassroom}
            className="bg-blue-800 hover:bg-blue-500 text-white h-[32px] mx-2 cursor-pointer font-semibold hover:text-white py-2 px-2 border border-transparent hover:border-[#15C0FD] rounded flex items-center gap-1"
          >
            <span>Classroom</span>
            <ArrowOutwardRounded />
          </button>
          <button
            className=" bg-blue-800 hover:bg-blue-500 text-white h-[32px] me-4 cursor-pointer font-semibold hover:text-white py-2 px-2 border border-[#15C0FD] hover:border-[#15C0FD] rounded flex items-center"
            onClick={
              localStorage.getItem("user") !== "null"
                ? toggleShowLogout
                : toggleShowLogin
            }
          >
            {localStorage.getItem("user") !== "null" ? "Log Out" : "Log In"}
          </button>
        </div>
      </div>
      <Login />
    </nav>
  );
};

export default Navbar;
