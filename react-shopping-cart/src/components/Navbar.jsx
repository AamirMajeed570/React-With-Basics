import React from 'react'
import './Navbar.css';
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { styled } from "@mui/material";
import {Badge} from "@mui/material";
import Stack from "@mui/material/Stack";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const Navbar = () => {
  return (
    <div className="App">
    <div className="list">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Gallery</li>
      </ul>
    </div>
      <Stack className="avatar">
        <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
      </Stack>
      <IconButton aria-label="cart">
    <StyledBadge badgeContent={4} color="secondary">
      <ShoppingCartIcon />
    </StyledBadge>
  </IconButton>
  </div>
  )
}

export default Navbar
