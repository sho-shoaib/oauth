import { Box, Typography } from '@mui/material'
import React from 'react'

const HomeWorksGridPer = ({children}) => {
  return (
    <Box sx={{p: 5, border: 10, display: "inline-block", pt: 15, pb: 15, borderRadius:5, transform: "translateY(-100px)"}}>
        <Typography variant='h1' sx={{fontWeight: 500, fontSize: 35, fontWeight: 400, color: "rgba(245, 230, 83, 0.9)"}}>{children}</Typography>
    </Box>
  )
}

export default HomeWorksGridPer