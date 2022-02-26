import { Typography } from "@mui/material";
import React from "react";

const Header = ({ children }) => {
  return (
    <Typography
      sx={{
        borderBottom: 5,
        borderColor: "#ffdf00",
        fontSize: { xs: 26, sm: 32, lg: 35 },
        fontWeight: 500,
        color: "black",
        component: "h1",
        display: "inline-block",
      }}
    >
      {children}
    </Typography>
  );
};

export default Header;
