import React from "react";

import { Logo } from "../Logos";

import {
  StyledHeader,
  StyledHeaderContainer,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledAnchor,
} from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledAnchor href="#intro">
          <Logo px="42" />
        </StyledAnchor>
        <StyledNav>
          <StyledList>
            <StyledListItem>
              <StyledAnchor href="#about-us">Nosotros</StyledAnchor>
            </StyledListItem>
            <StyledListItem>
              <StyledAnchor href="#services">Servicios</StyledAnchor>
            </StyledListItem>
            <StyledListItem>
              <StyledAnchor href="#contact">Contáctanos</StyledAnchor>
            </StyledListItem>
          </StyledList>
        </StyledNav>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export { Header };
