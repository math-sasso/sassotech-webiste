import { Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledLogo = styled(Typography)`
    color: var(--branco);
    cursor: pointer;
    height: 100%;
    width: auto;
    float: left;
    padding-left: 2%;
    margin: 0 auto;
    padding: 10px 0;
`;


export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 70px;
  width: 70px;
  margin-right: 16px;
`;
