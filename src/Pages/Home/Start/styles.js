import styled from 'styled-components';

import { Button, Card, CardContent } from '@mui/material';

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #fff;
`;

export const StyledCard = styled(Card)`
  max-width: 600px;
  margin-left: 5%;
  margin-right: 5%;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
`;

export const StyledButton = styled(Button)`
  margin-top: 2rem;
  background-color: #03a4ed;
  color: #fff;

  &:hover {
    background-color: #2a2a2a;
  }
`;

export const StyledImage = styled.img`
  max-width: 50%;
  height: auto;
`;