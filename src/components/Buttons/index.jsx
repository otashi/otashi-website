import React from "react";

import {
  StyledButton,
  StyledSubmitButton,
  StyledButtonIcon,
  StyledAnchorButton,
} from "./styles";

import spinner from "../../assets/spinner.svg";

const Button = ({ label, type = "button", handleClick }) => {
  return (
    <StyledButton type={type} onclick={handleClick}>
      {label}
    </StyledButton>
  );
};

const SubmitButton = ({ label, type = "button", handleClick, status }) => {
  const successMsg = "Mensaje enviado";
  const errorMsg = "Error: intenta de nuevo";
  let content = label;
  let disabled = status !== "";

  switch (status) {
    case "error":
      content = errorMsg;
      break;
    case "success":
      content = successMsg;
      break;
    default:
      content = label;
  }

  return (
    <StyledSubmitButton
      type={type}
      onclick={handleClick}
      status={status}
      disabled={disabled}
    >
      {status === "loading" ? (
        <StyledButtonIcon src={spinner} alt="" />
      ) : (
        content
      )}
    </StyledSubmitButton>
  );
};

const AnchorButton = ({ label, href }) => {
  return <StyledAnchorButton href={href}>{label}</StyledAnchorButton>;
};

export { AnchorButton, Button, SubmitButton };
