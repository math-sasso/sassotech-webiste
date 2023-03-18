import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ff695f;
`;

const StyledCard = styled(Card)`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

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