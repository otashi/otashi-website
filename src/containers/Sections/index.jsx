import React from "react";

import { StyledSectionContainer } from "./styles";

const SectionContainer = ({ children, id }) => {
  return <StyledSectionContainer id={id}>{children}</StyledSectionContainer>;
};

export { SectionContainer };
