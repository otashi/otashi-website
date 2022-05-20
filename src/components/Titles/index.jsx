import React from "react";

import { StyledSectionTitle, StyledSectionSubtitle } from "./styles";

const SectionTitle = ({ label }) => {
  return <StyledSectionTitle>{label}</StyledSectionTitle>;
};

const SectionSubtitle = ({ label }) => {
  return <StyledSectionSubtitle>{label}</StyledSectionSubtitle>;
};

export { SectionTitle, SectionSubtitle };
