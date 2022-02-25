import { Button, Container, Typography } from '@mui/material'
import { borderBottom, Box } from '@mui/system'
import React from 'react'
import HomeWorksGrid from '../components/HomeWorksGrid'

const HomeWorks = () => {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#6F4686", color: "white", mt: "2vh", pb: 15, overflow: "hidden"}}>
        <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Typography sx={{borderBottom: 5, borderColor: "yellow", fontSize: 40, fontWeight: 500, color: "#f5f5f5"}}>We work in</Typography>

        <Button variant="contained" sx={{color: "black", backgroundColor: "yellow", color: "black", "&:hover": {backgroundColor: "rgba(245, 230, 83, 0.9)"}}}>Free Consultation</Button>
        </Box>
        <HomeWorksGrid />
    </Container>
  )
}

export default HomeWorks