import React from 'react';
import {StyledSection, StyledCard, StyledCardContent, StyledButton, StyledImage} from "./styles"

import { Typography} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import techImage from './tech_work.jpeg';


export default function Start(){
  return (
    <section id="start">
      <StyledSection>
        <StyledCard>
          <StyledCardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to our AI Solutions Company!
            </Typography>
            <Typography variant="body1" gutterBottom>
              We offer top-notch artificial intelligence and software engineering solutions to help your business thrive.
            </Typography>
            <ScrollLink to="services" smooth={true} duration={500}>
              <StyledButton variant="contained">Learn More</StyledButton>
            </ScrollLink>
          </StyledCardContent>
        </StyledCard>
        <StyledImage src={techImage} alt="People working in tech projects" />
      </StyledSection>
    </section>
  );
};