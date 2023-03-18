import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
const StyledLogo = styled(Typography)`
  font-weight: 700;
  font-size: 1.5rem;
  color: #03a4ed;
  cursor: pointer;
`;

const Logo = () => {

    const handleScrollToTop = () => {
        scroll.scrollToTop();
        };

  return (
    <StyledLogo onClick={handleScrollToTop}>
        SassoTech
    </StyledLogo>
  );
};

export default Logo;