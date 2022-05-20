import React from "react";

import { StyledInput, StyledTextArea } from "./styles";

const Input = ({ type, placeholder, required = false }) => {
  return (
    <StyledInput type={type} placeholder={placeholder} required={required} />
  );
};

const TextArea = ({ placeholder, required = false }) => {
  return <StyledTextArea placeholder={placeholder} required={required} />;
};

export { Input, TextArea };
