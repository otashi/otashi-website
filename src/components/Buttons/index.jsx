import React from "react";

import { StyledButton, StyledAnchorButton } from "./styles";

const Button = ({ label, handleClick }) => {
  return <StyledButton onclick={handleClick}>{label}</StyledButton>;
};

const AnchorButton = ({ label, href }) => {
  return <StyledAnchorButton href={href}>{label}</StyledAnchorButton>;
};

export { AnchorButton, Button };
