import React from "react";

import {
  StyledIntroContainer,
  StyledIntroTextContainer,
  StyledIntroTitle,
  StyledIntroSubtitle,
  StyledIntroFigure,
  StyledIntroImage,
} from "./styles";

import heroImage from "../../assets/Hero.png";
import { AnchorButton } from "../../components/Buttons";

const IntroContainer = () => {
  return (
    <StyledIntroContainer id="intro">
      <StyledIntroTextContainer>
        <StyledIntroTitle>Agencia Digital</StyledIntroTitle>
        <StyledIntroSubtitle>
          Impulsamos tu misión en medios digitales
        </StyledIntroSubtitle>
        <AnchorButton label="Contáctanos" href="#contact" />
      </StyledIntroTextContainer>
      <StyledIntroFigure>
        <StyledIntroImage src={heroImage} alt="" />
      </StyledIntroFigure>
    </StyledIntroContainer>
  );
};

export { IntroContainer };
