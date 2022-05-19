import React from "react";

import { StyledHeaderLogo, StyledFooterLogo } from "./styles";

const HeaderLogo = ({ px }) => {
  return <StyledHeaderLogo px={px}>Otashi</StyledHeaderLogo>;
};

const FooterLogo = ({ px }) => {
  return <StyledFooterLogo px={px}>Otashi</StyledFooterLogo>;
};

export { HeaderLogo, FooterLogo };
