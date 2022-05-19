import React from "react";

import {
  StyledContactData,
  StyledIcon,
  StyledContactInfo,
  StyledLabel,
  StyledData,
} from "./styles";

const ContactData = ({ icon, label, data }) => {
  return (
    <StyledContactData>
      <StyledIcon src={icon} alt="" />
      <StyledContactInfo>
        <StyledLabel>{label}</StyledLabel>
        <StyledData>{data}</StyledData>
      </StyledContactInfo>
    </StyledContactData>
  );
};

export { ContactData };
