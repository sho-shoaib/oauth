import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import HomeWorksGridPer from "./HomeWorksGridPer"
import React from 'react'

const HomeWorksGrid = () => {
  return (
    <Box sx={{width: "100%"}}>
        <Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
        <Box sx={{p: 5, border: 10, display: "inline-block", pt: 10, pb: 10, borderRadius:5, transform: "translateY(-90px)"}}>
        <Typography variant='h1' sx={{fontWeight: 500, fontSize: 35, fontWeight: 400, color: "rgba(245, 230, 83, 0.9)"}}>Unlisted</Typography>
    </Box>
        </Box>
    </Box>
  )
}

export default HomeWorksGrid