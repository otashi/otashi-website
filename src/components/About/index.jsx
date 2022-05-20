import React from "react";

import { StyledAboutContentListItem, StyledCheck } from "./styles";

import checkIcon from "../../assets/circle-check.svg";

const AboutListItem = ({ label }) => {
  return (
    <StyledAboutContentListItem>
      <StyledCheck src={checkIcon} alt="check" />
      {label}
    </StyledAboutContentListItem>
  );
};

export { AboutListItem };
