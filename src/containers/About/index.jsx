import React from "react";

import {
  StyledAboutContainer,
  StyledAboutTitle,
  StyledAboutSubtitle,
  StyledAboutGrid,
  StyledFigure,
  StyledImage,
  StyledAboutContent,
  StyledAboutContentText,
  StyledSpan,
  StyledAboutContentList,
} from "./styles";

import aboutImage from "../../assets/About.jpg";
import { AboutListItem } from "../../components/About";

const AboutContainer = () => {
  return (
    <StyledAboutContainer id="about-us">
      <StyledAboutTitle>Nosotros</StyledAboutTitle>
      <StyledAboutSubtitle>
        Cuenta con nosotros crear todos tus productos digitales
      </StyledAboutSubtitle>
      <StyledAboutGrid>
        <StyledFigure>
          <StyledImage src={aboutImage} alt="" />
        </StyledFigure>
        <StyledAboutContent>
          <StyledAboutContentText>
            Somos una agencia digital que te acompaña en todo el proceso de
            creación de productos digitales, ya sea para uso de tus clientes o
            para tí.{" "}
            <StyledSpan>Cuenta con nosotros para crear valor.</StyledSpan>
          </StyledAboutContentText>
          <StyledAboutContentList>
            <AboutListItem label="Creamos productos que puedes utilizar rápidamente." />
            <AboutListItem label="Realiza cambios durante el proyecto sin costo." />
            <AboutListItem label="Tú defines qué quieres primero." />
            <AboutListItem label="Itera, aprende y evoluciona tus productos." />
          </StyledAboutContentList>
        </StyledAboutContent>
      </StyledAboutGrid>
    </StyledAboutContainer>
  );
};

export { AboutContainer };
