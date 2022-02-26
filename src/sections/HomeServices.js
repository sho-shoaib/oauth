import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HomeWorksGridPer from "../components/HomeWorksGridPer";

const HomeServices = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        backgroundColor: "#f5f5f5",
        color: "black",
        mt: "2vh",
        overflow: "hidden",
        maxHeight: { xs: 900, md: 730 },
        mb: "2vh",
        pt: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: "lg",
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          marginInline: "auto",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Typography
          sx={{
            borderBottom: 5,
            borderColor: "#ffdf00",
            fontSize: { xs: 30, sm: 32, lg: 35 },
            fontWeight: 500,
            color: "black",
          }}
        >
          Services we offer
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: 10,
            borderColor: "#6F4686",
            display: { xs: "none", md: "grid" },
            placeItems: "center",
            borderRadius: "50%",
            height: 300,
            width: 300,
            transform: "translateY(-140px)",
            mb: 10,
          }}
        >
          <Typography
            variant='h5'
            component='h2'
            sx={{
              fontSize: 35,
              textAlign: "center",
              transform: "translateY(30px)",
            }}
          >
            Managing <br />
            portfolio
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <HomeWorksGridPer color='black' bg='#6F4686' trans='0' mr='-40px'>
            Ipo <br />
            Account
          </HomeWorksGridPer>
          <HomeWorksGridPer color='black' bg='#6F4686' trans='80' mr='-40px'>
            Trading <br />
            Account
          </HomeWorksGridPer>
          <HomeWorksGridPer color='black' bg='#6F4686' trans='150'>
            Demat <br />
            Account
          </HomeWorksGridPer>
          <HomeWorksGridPer color='black' bg='#6F4686' trans='80' ml='-40px'>
            Margin <br />
            Account
          </HomeWorksGridPer>
          <HomeWorksGridPer color='black' bg='#6F4686' trans='0' ml='-40px'>
            Stocks <br />
            Advisory
          </HomeWorksGridPer>
        </Box>

        <Grid container spacing={2} sx={{ width: "100%", mt: 5, mb: 10 }}>
          <Grid item xs={12}>
            <Box
              sx={{
                pt: 5,
                pb: 5,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
                borderColor: "#6F4686",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Managing portfolio
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                pt: 8,
                pb: 8,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
                borderColor: "#6F4686",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Ipo <br />
                Account
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                pt: 8,
                pb: 8,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
                borderColor: "#6F4686",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Demat <br />
                Account
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                pt: 8,
                pb: 8,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
                borderColor: "#6F4686",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Margin <br />
                Account
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                pt: 8,
                pb: 8,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
                borderColor: "#6F4686",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Stocks <br />
                Advisory
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                pt: 5,
                pb: 5,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
                borderColor: "#6F4686",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Trading Account
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeServices;
