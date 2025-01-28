export const navButtonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1000,
  backgroundColor: "#f1c40f",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  "&:hover": { backgroundColor: "#E0E0E0" },
};

export const textInputStyles = {
  "& .MuiInputBase-root": {
    fontWeight: "500",
    fontFamily: "Inter, sans-serif",
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "8px",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Inter, sans-serif",
  },
};
