import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../components/Header";

const data = [
  {
    t: "Our Aim",
    p: "Mumbai's one of the fastest-growing sub-broker going Hand-in-hand with leading Brokers in India to offer affordable brokerage rates.",
  },
  {
    t: "Our Vision",
    p: "The company motto is, make its customer invest in Non-conventional products in simple and affordable ways. In turn, help them grow their wealth.",
  },
  {
    t: "Our Mission",
    p: "Our main purpose is to financially literate the society. We help those who plan to build their own financial pyramid",
  },
  {
    t: "Our Feature",
    p: "We work with 3D's, we follow our ethics to achieve targets. we draw our guideline by seeing indicator.",
  },
];

const HomeFeatures = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", pb: 8, mb: "2vh" }}>
      <Container>
        <Header>Our Features</Header>
        <Grid container spacing={5} columnSpacing={5} sx={{ mt: 1 }}>
          {data.map((item, i) => {
            return (
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    backgroundColor: "rgba(111, 70, 134, 0.1)",
                    p: 4,
                    borderRadius: 5,
                  }}
                >
                  <Typography sx={{ fontSize: { xs: 26, sm: 32, lg: 35 } }}>
                    {item.t}
                  </Typography>
                  <Typography component='h2' sx={{ fontSize: 20 }}>
                    {item.p}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeFeatures;
