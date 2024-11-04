import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import Body from "./Components/Body/Body";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
    <Body />
  </GoogleOAuthProvider>
);
