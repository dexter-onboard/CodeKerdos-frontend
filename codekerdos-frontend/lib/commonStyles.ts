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

export const cardScrollStyling = {
  maxHeight: "120px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
    backgroundColor: "#F5F5F5",
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: "10px",
    backgroundColor: "#F5F5F5",
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    backgroundColor: "#1B99D4",
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
  },
};

export const buyNowButtonStyling = {
  textTransform: "capitalize",
  fontWeight: "500",
  fontSize: "16px",
  color: "#fff",
  backgroundColor: "#1B99D4",
  padding: "6px 16px",
};
