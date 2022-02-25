import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import backgroundImage from "../images/stock-back.jpg"
import HomeWorks from '../sections/HomeWorks'
 
const Homepage = () => {
  return (
      <>
    <Box sx={{width: "100vw", height: "98vh", backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}>
        <Box sx={{width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.3)"}}>
        <Container sx={{width: "100%", height: "100%", display: "flex", alignItems: "center"}}>
            <Box sx={{width: {xs: "100%", md: "80%"}}}>
                <Typography sx={{fontSize: {xs: 30, md: 40}, color: "white" }}>Our <span id="hero-span">DISCIPLINE</span> helps to turn your <span id="hero-span">DESIRE</span> into your <span id="hero-span">DISTINY</span></Typography>
                <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: {xs: 0, sm: 3}, alignItems: "flex-start"}}>
                <Button variant="contained" sx={{backgroundColor: "yellow", color: "black", "&:hover": {backgroundColor: "rgba(245, 230, 83, 0.9)"}, mt: 3}}>Support / Help</Button>
                <Button variant="contained" sx={{backgroundColor: "yellow", color: "black", "&:hover": {backgroundColor: "rgba(245, 230, 83, 0.9)"}, mt: 3}}>Open demat Acc</Button>
                </Box>
            </Box>
        </Container>
        </Box>
    </Box>
    <HomeWorks />
    </>
  )
}

export default Homepage