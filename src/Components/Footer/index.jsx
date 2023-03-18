import React from 'react';
import { Typography, Link, IconButton } from '@mui/material';
import styled from 'styled-components';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const StyledFooter = styled.footer`
  background-color: #03a4ed;
  padding: 2rem;
`;

const StyledTypography = styled(Typography)`
  color: #fff;
`;

const StyledLink = styled(Link)`
  color: #fff;
  margin-right: 2rem;
`;

const StyledIconButton = styled(IconButton)`
  color: #fff;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledTypography variant="subtitle1" align="center">
        Contact us:
      </StyledTypography>
      <StyledTypography variant="body1" align="center">
        Phone: 555-555-5555
      </StyledTypography>
      <StyledTypography variant="body1" align="center">
        Email: info@mywebsite.com
      </StyledTypography>
      <StyledTypography variant="body1" align="center">
        Website: www.mywebsite.com
      </StyledTypography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <StyledLink href="#">
          <StyledIconButton>
            <FaTwitter />
          </StyledIconButton>
        </StyledLink>
        <StyledLink href="#">
          <StyledIconButton>
            <FaFacebook />
          </StyledIconButton>
        </StyledLink>
        <StyledLink href="#">
          <StyledIconButton>
            <FaInstagram />
          </StyledIconButton>
        </StyledLink>
      </div>
    </StyledFooter>
  );
};

export default Footer;
