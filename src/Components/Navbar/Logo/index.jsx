import React from 'react';

import {StyledLogo,LogoContainer, LogoImg} from "./styles"
import SassoTechLogo from "./sassotech_logo.png"
import { useNavigate } from 'react-router-dom';

const Logo = () => {

    const navigate = useNavigate();

    return (
        <LogoContainer>
            <StyledLogo onClick={() => navigate("/")}>
                <LogoImg src={SassoTechLogo} alt="Logo" />
            </StyledLogo>
        </LogoContainer>
    );
};

export default Logo;


