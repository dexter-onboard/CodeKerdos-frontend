"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./navbar.css";
import { useRouter } from "next/navigation";
import { handleScrollToSection } from "@/lib/commonFunctions";
import axios from "axios";
import { baseUrl } from "@/lib/commonLink";
import { IUser } from "@/app/page";

const pages = [
  { sectionName: "About Us", sectionId: "about-us" },
  { sectionName: "Courses", sectionId: "courses" },
  { sectionName: "Blogs", sectionId: "blogs" },
  { sectionName: "Contact Us", sectionId: "contact-us" },
];
const settings = ["Classroom"];

type setUserType = Dispatch<SetStateAction<IUser>>;

const Navbar = ({ user, setUser }: { user: IUser; setUser: setUserType }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (sectionID: string) => {
    setAnchorElNav(null);
    handleScrollToSection(sectionID);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogIn = () => {
    router.push("/signIn");
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("studentId");
    setUser({
      loggedIn: false,
      token: "",
      studentInfo: { name: "", phoneNumber: "", username: "" },
    });
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const studentId = localStorage.getItem("studentId");

    if (token) {
      setUser({
        loggedIn: true,
        token,
        studentInfo: { name: "", phoneNumber: "", username: "" },
      });

      const url = `${baseUrl}/${studentId}`;
      axios
        .get(url)
        .then((response) => {
          setUser({ loggedIn: true, token, studentInfo: response.data });
        })
        .catch((error) => {
          console.error("error fetching student details ", error);
        });
    }
  }, [setUser]);

  return (
    <AppBar sx={{ backgroundColor: "#0d1831" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              src="/images/CodeKerdos.svg"
              alt="Logo"
              style={{ height: "20px", width: "auto" }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.sectionName}
                  onClick={() => handleCloseNavMenu(page.sectionId)}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.sectionName}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              src="/images/CodeKerdos.svg"
              alt="Logo"
              style={{ height: "20px", width: "auto" }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { xs: "none", md: "right" },
              gap: { xs: "none", md: "4rem" },
              mr: { xs: "none", md: "2rem" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.sectionName}
                className="font-class"
                onClick={() => handleCloseNavMenu(page.sectionId)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {page.sectionName}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {!user.loggedIn ? (
              <Button
                variant="contained"
                sx={{
                  fontSize: "14px",
                  color: "#fff",
                  fontWeight: "600",
                  textTransform: "none",
                }}
                className="font-class"
                onClick={handleLogIn}
              >
                Log In
              </Button>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={user?.studentInfo?.name || "Code Kerdos"}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography
                        className="font-class"
                        sx={{ textAlign: "center" }}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}

                  <MenuItem onClick={handleLogOut}>
                    <Typography
                      className="font-class"
                      sx={{ textAlign: "center" }}
                    >
                      Log Out
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
