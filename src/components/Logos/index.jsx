import React from "react";

import { StyledLogo, StyledFooterLogo } from "./styles";

const Logo = ({ px }) => {
  return <StyledLogo px={px}>Otashi</StyledLogo>;
};

const FooterLogo = ({ px }) => {
  return <StyledFooterLogo px={px}>Otashi</StyledFooterLogo>;
};

export { Logo, FooterLogo };
