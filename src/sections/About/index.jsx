import React from "react";

import {
  StyledAboutGrid,
  StyledFigure,
  StyledImage,
  StyledAboutContent,
  StyledAboutContentText,
  StyledSpan,
  StyledAboutContentList,
} from "./styles";

import { SectionContainer } from "../../containers/Sections";
import { SectionSubtitle, SectionTitle } from "../../components/Titles";
import { AboutListItem } from "../../components/About";

import aboutImage from "../../assets/About.jpg";

const AboutContainer = () => {
  return (
    <SectionContainer id="about-us">
      <SectionTitle label="Nosotros" />
      <SectionSubtitle label="Cuenta con nosotros crear todos tus productos digitales" />
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
    </SectionContainer>
  );
};

export { AboutContainer };
