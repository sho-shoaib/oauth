import { Box, Button, Container, MenuItem, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger';

const pages=["Unlisted", "About us"]

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <Container elevation={3} id="nav" maxWidth="xl" sx={{display: "flex", justifyContent:"space-between",  p: 2, pt: 0.5, pb: 0.5, position:"fixed", top: 0, backgroundColor: `${trigger?"#f5f5f5":"transparent"}`, transition: "0.4s", alignItems: "center", zIndex: "1000"}}>
        <Typography variant='h6' sx={{fontSize: 30, color: `${trigger?"black":"white"}`, transition: "0.1s"}}>Logo</Typography>
        <Box sx={{display: { xs: 'none', md: 'inline-block' }}}>
            <Button variant="contained" sx={{mr: 2, backgroundColor: "yellow", color: "black", "&:hover": {backgroundColor: "rgba(245, 230, 83, 0.9)"}}} >Unlisted</Button>
            <Button variant="text" sx={{ color: `${trigger?"black":"white"}`, transition: "0.1s"}}>About us</Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, color: "white", }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
    </Container>
  )
}

export default Navbar