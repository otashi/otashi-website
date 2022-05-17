import React from "react";

import {
  StyledHeader,
  StyledImg,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledAnchor,
} from "./styles";

import logo from "../../assets/Otashi.png";

const Header = () => {
  return (
    <StyledHeader>
      <StyledImg src={logo} alt="Otashi" />
      <StyledNav>
        <StyledList>
          <StyledListItem>
            <StyledAnchor href="#about-us">Nosotros</StyledAnchor>
          </StyledListItem>
          <StyledListItem>
            <StyledAnchor href="#services">Servicios</StyledAnchor>
          </StyledListItem>
          <StyledListItem>
            <StyledAnchor href="#value-proposition">
              Propuesta de valor
            </StyledAnchor>
          </StyledListItem>
          <StyledListItem>
            <StyledAnchor href="#contact">Contáctenos</StyledAnchor>
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export { Header };
