import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

export default function UserAvatar() {
  const user = localStorage.getItem("user");
  const userInitial = user.charAt(0).toUpperCase();
  return (
    user !== "null" && (
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Riya Agarwal"
          src="/broken-image.jpg"
        >
          {userInitial}
        </Avatar>
      </Stack>
    )
  );
}
