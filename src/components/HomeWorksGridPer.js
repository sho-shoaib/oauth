import { Box, Typography } from "@mui/material";
import React from "react";

const HomeWorksGridPer = ({ children, trans, mr, ml, color, bg }) => {
  return (
    <Box
      sx={{
        p: 3,
        border: 10,
        display: "inline-block",
        pt: 15,
        pb: 35,
        borderRadius: 5,
        transform: `translateY(-${trans}px)`,
        mr: `${mr}`,
        ml: `${ml}`,
        borderColor: bg || "white",
        minWidth: 250,
      }}
    >
      <Typography
        variant='h1'
        component='h2'
        sx={{
          fontWeight: 500,
          fontSize: { xs: 30, md: 32 },
          fontWeight: 400,
          color: color || "#f5f5f5",
          textAlign: "center",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default HomeWorksGridPer;
