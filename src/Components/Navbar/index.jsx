import React from 'react';
import { Toolbar} from '@mui/material';
import {StyledAppBar, StyledButton, NavbarWrapper, NavbarLink} from "./styles"
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {


  const navigate = useNavigate();
  // return (
  //   <NavbarWrapper>
  //     <Logo />
  //     <NavbarLink onClick={() => navigate("/")} href="#">Home</NavbarLink >
  //     <NavbarLink  onClick={() => navigate("/contact")}href="#">Contact</NavbarLink>
  //   </NavbarWrapper>
  // );
  return (
      <StyledAppBar position="sticky" sx={{ bgcolor: "var(--branco)"}} >
        <Toolbar>
          <Logo />
          <div style={{ flexGrow: 1 }} />
          <StyledButton color="inherit" onClick={() => navigate("/")} sx={{ bgcolor: "var(--branco)"}}>
            Home
          </StyledButton>
          <StyledButton color="inherit" onClick={() => navigate("/contact")} sx={{ bgcolor: "var(--branco)"}}>
           Contact
          </StyledButton>
        </Toolbar>
      </StyledAppBar>
  );

  
};

export default Navbar;