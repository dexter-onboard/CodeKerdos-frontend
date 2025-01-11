import React from "react";
import "../styles/navbar.css";

const Navbar = () => {

  // console.log(user);

  return (
    <nav className="navbar relative overflow-hidden flex flex-col">
      <div className="flex w-full justify-between items-center">
        <div
          className="navbar-logo relative z-10"
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
