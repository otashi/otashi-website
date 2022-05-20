import React from "react";
import {
  StyledFooter,
  StyledFooterInfoContainer,
  StyledFooterInfo,
} from "./styles";

import { FooterLogo } from "../../components/Logos";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogo px="42" />
      <StyledFooterInfoContainer>
        <StyledFooterInfo>help@otashi.digital</StyledFooterInfo>
        <StyledFooterInfo>+57 310 780 4751</StyledFooterInfo>
      </StyledFooterInfoContainer>
    </StyledFooter>
  );
};

export { Footer };
