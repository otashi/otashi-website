import React from "react";

import {
  StyledServiceCard,
  StyledServiceCardContent,
  StyledServiceIcon,
  StyledServiceName,
  StyledServiceDescription,
  StyledServiceCardAction,
} from "./styles";

const ServiceCard = ({ icon, label, description, cta }) => {
  return (
    <StyledServiceCard>
      <StyledServiceCardContent>
        <StyledServiceIcon src={icon} alt="" />
        <StyledServiceName>{label}</StyledServiceName>
        <StyledServiceDescription>{description}</StyledServiceDescription>
      </StyledServiceCardContent>
      <StyledServiceCardAction href="#contact">{cta}</StyledServiceCardAction>
    </StyledServiceCard>
  );
};

export { ServiceCard };
