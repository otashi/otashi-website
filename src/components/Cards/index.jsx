import React, { useContext } from "react";
import { AppContext } from "../../context/context";

import {
  StyledServiceCard,
  StyledServiceCardContent,
  StyledServiceIcon,
  StyledServiceName,
  StyledServiceDescription,
  StyledServiceCardAction,
} from "./styles";

const ServiceCard = ({ icon, label, description, cta }) => {
  const { formData, setFormData } = useContext(AppContext);

  const handleClick = () => {
    setFormData({ ...formData, service: label });
  };

  return (
    <StyledServiceCard>
      <StyledServiceCardContent>
        <StyledServiceIcon src={icon} alt="" />
        <StyledServiceName>{label}</StyledServiceName>
        <StyledServiceDescription>{description}</StyledServiceDescription>
      </StyledServiceCardContent>
      <StyledServiceCardAction href="#contact" onClick={handleClick}>
        {cta}
      </StyledServiceCardAction>
    </StyledServiceCard>
  );
};

export { ServiceCard };
