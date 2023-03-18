import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as ScrollLink} from 'react-scroll';
import styled from 'styled-components';
import Logo from './Logo';
import styles from './Navbar.module.css';

const StyledAppBar = styled(AppBar)`
  background-color: #fff;
  box-shadow: none;
`;

const StyledButton = styled(Button)`
  color: #03a4ed;
  font-weight: 700;
  text-decoration: none;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  &:hover {
    background-color: #03a4ed;
    color: #fff;
  }
`;


const Navbar = () => {


  return (
    <div className={styles.navbar}>
      <StyledAppBar position="sticky">
        <Toolbar>
          <Logo />
          <div style={{ flexGrow: 1 }} />
          <StyledButton color="inherit">
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </StyledButton>
          <StyledButton color="inherit">
            <ScrollLink to="services" smooth={true} duration={500}>
              Services
            </ScrollLink>
          </StyledButton>
          <StyledButton color="inherit">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </StyledButton>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default Navbar;