import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../components/Header";

const HomeWhy = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", pt: 3 }}>
      <Container sx={{ pb: 10 }}>
        <Header>Why do you need a successful broker</Header>
        <Box sx={{ mt: 7, maxWidth: "md" }}>
          <Typography
            variant='h4'
            component='h2'
            sx={{
              fontSize: { xs: 25, sm: 30 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Stock market brokers are an integral part of the investment scenario
            of a country. They not only facilitate buying and selling of stocks
            from the stock exchanges on behalf of individual or institutional
            investors but also offer valuable investment advice to their
            clients.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeWhy;
