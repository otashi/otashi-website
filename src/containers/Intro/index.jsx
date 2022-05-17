import React from "react";

import {
  StyledIntroContainer,
  StyledIntroTextContainer,
  StyledIntroTitle,
  StyledIntroSubtitle,
  StyledIntroAnchor,
  StyledIntroFigure,
  StyledIntroImage,
} from "./styles";

import heroImage from "../../assets/Hero.png";

const IntroContainer = () => {
  return (
    <StyledIntroContainer id="intro">
      <StyledIntroTextContainer>
        <StyledIntroTitle>Agencia Digital</StyledIntroTitle>
        <StyledIntroSubtitle>
          Impulsamos tu misión en medios digitales
        </StyledIntroSubtitle>
        <StyledIntroAnchor href="#contact">Empecemos</StyledIntroAnchor>
      </StyledIntroTextContainer>
      <StyledIntroFigure>
        <StyledIntroImage src={heroImage} alt="" />
      </StyledIntroFigure>
    </StyledIntroContainer>
  );
};

export { IntroContainer };
