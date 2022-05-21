import React from "react";

import { StyledInput, StyledTextArea } from "./styles";

const Input = ({
  type,
  placeholder,
  required = false,
  value,
  handleChange,
  id,
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(event) => handleChange(event, id)}
    />
  );
};

const TextArea = ({
  placeholder,
  required = false,
  value,
  handleChange,
  id,
}) => {
  return (
    <StyledTextArea
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(event) => handleChange(event, id)}
    />
  );
};

export { Input, TextArea };
