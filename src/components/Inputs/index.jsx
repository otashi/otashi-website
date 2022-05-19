import React from "react";

import { StyledInput } from "./styles";

const Input = ({ type, placeholder, required = false }) => {
  return (
    <StyledInput type={type} placeholder={placeholder} required={required} />
  );
};

export { Input };
