import React from 'react';
import { Typography } from '@mui/material';
import {StyledSection, StyledCard, StyledCardContent} from "./styles"

export default function About(){
  return (
    <section id="about">
      <StyledSection>
        <StyledCard>
          <StyledCardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our company was founded with a mission to provide top-quality artificial intelligence and software engineering solutions to businesses of all sizes. With years of experience and a team of dedicated professionals, we have helped many companies achieve their goals and succeed in today's competitive market.
            </Typography>
          </StyledCardContent>
        </StyledCard>
      </StyledSection>
    </section>
  );
};