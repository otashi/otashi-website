import React from "react";

import { Logo } from "../Logo";

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
        <Logo px="42" />
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
