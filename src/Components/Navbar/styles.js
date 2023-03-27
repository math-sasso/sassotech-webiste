import { AppBar,  Button } from '@mui/material';
import styled from 'styled-components';

export const StyledAppBar = styled(AppBar)`
 && {
  background-color: #fff;
  box-shadow: none;
  box-shadow: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  }
`;

export const StyledButton = styled(Button)`
  && {
    color: var(--azul);
    font-weight: 700;
    text-decoration: none;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    &:hover {
        background-color: var(--branco);
        color: var(--laranja);
  }
  }
  
`;