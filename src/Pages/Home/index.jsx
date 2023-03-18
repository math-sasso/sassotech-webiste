import React from 'react';
import { Typography, Button, Card, CardContent } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import techImage from './tech_work.jpeg';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #fff;
`;

const StyledCard = styled(Card)`
  max-width: 600px;
  margin-left: 5%;
  margin-right: 5%;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
  background-color: #03a4ed;
  color: #fff;

  &:hover {
    background-color: #2a2a2a;
  }
`;

const StyledImage = styled.img`
  max-width: 50%;
  height: auto;
`;

export default function Home(){
  return (
    <section id="home">
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