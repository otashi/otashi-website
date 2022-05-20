import React from "react";
import { Button } from "../Buttons";

import { Input, TextArea } from "../Inputs";

import { StyledForm, StyledTextArea, StyledButton } from "./styles";

const ContactForm = () => {
  return (
    <StyledForm>
      <Input type="text" placeholder="Nombre" />
      <Input type="text" placeholder="Teléfono" />
      <Input type="email" placeholder="Correo electrónico" />
      <Input type="text" placeholder="Servicio" />
      <StyledTextArea>
        <TextArea placeholder="Cuéntanos sobre tu proyecto" />
      </StyledTextArea>
      <StyledButton>
        <Button label="Enviar" type="submit" />
      </StyledButton>
    </StyledForm>
  );
};

export { ContactForm };
