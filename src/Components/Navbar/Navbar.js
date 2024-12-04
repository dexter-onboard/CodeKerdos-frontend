import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Body/Body";
import { IconButton, Tooltip } from "@mui/material";
import { ArrowOutwardRounded } from "@mui/icons-material";
import UserAvatar from "../UserAvatar";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loggedIn: false,
    token: "",
    studentInfo: {},
  });

  const handleLogIn = () => {
    navigate("/login");
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUser({ loggedIn: false, token: "" });
    navigate("/");
  };

  const handleClassroom = () => {
    if (user.loggedIn === true) navigate("/classroom");
    else navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const studentId = localStorage.getItem("studentId");
    if (token) {
      setUser({ loggedIn: true, token });

      const url = `${process.env.REACT_APP_BACKEND_API_URL}/auth/${studentId}`;
      axios
        .get(url)
        .then((response) => {
          setUser({ loggedIn: true, token, studentInfo: response.data });
        })
        .catch((error) => {
          console.error("error fetching student details ", error);
        });
    }
  }, []);

  // console.log(user);

  return (
    <nav className="navbar relative overflow-hidden flex flex-col">
      <div className="flex w-full justify-between items-center">
        <div
          className="navbar-logo relative z-10"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
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
          {user.loggedIn && (
            <Tooltip title="" placement="bottom">
              {/* <IconButton>
                <UserAvatar />
              </IconButton> */}
              <div className="avatar-container">
                <i className="fas fa-user-circle fa-2x avatar-icon"></i>
                <span className="greeting-text">
                  Hi {user?.studentInfo?.name}
                </span>
              </div>
            </Tooltip>
          )}

          {user.loggedIn && (
            <button
              onClick={handleClassroom}
              className="bg-blue-800 hover:bg-blue-500 text-white h-[32px] mx-2 cursor-pointer font-semibold hover:text-white py-2 px-2 border border-transparent hover:border-[#15C0FD] rounded flex items-center gap-1"
            >
              <span>Classroom</span>
              <ArrowOutwardRounded />
            </button>
          )}

          <button
            className=" bg-blue-800 hover:bg-blue-500 text-white h-[32px] me-4 cursor-pointer font-semibold hover:text-white py-2 px-2 border border-[#15C0FD] hover:border-[#15C0FD] rounded flex items-center"
            onClick={user.loggedIn === true ? handleLogOut : handleLogIn}
          >
            {user.loggedIn === true ? "Log Out" : "Log In"}
          </button>
        </div>
      </div>
      <Login />
    </nav>
  );
};

export default Navbar;
