import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context";

import { SubmitButton } from "../Buttons";
import { Input, TextArea } from "../Inputs";

import { StyledForm, StyledTextArea, StyledButton } from "./styles";

const EMAIL_API = "https://formsubmit.co/ajax/help@otashi.digital";

const ContactForm = () => {
  const { formData, setFormData } = useContext(AppContext);
  const [status, setStatus] = useState("");

  const handleChange = ({ target }, payload) => {
    setFormData({ ...formData, [payload]: target.value });
  };

  const resetFormData = () => {
    const fields = Object.keys(formData);
    const newState = {};
    fields.forEach((field) => {
      newState[field] = "";
    });

    setFormData(newState);
  };

  const resetStatus = () => {
    setStatus("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(EMAIL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          subject: formData.email,
          message: `Phone: ${formData.phone} - Service: ${formData.service} \nComment: ${formData.comment}`,
          _template: "table",
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.error(e);
      setStatus("error");
    }

    setTimeout(resetStatus, 4000);
    resetFormData();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        handleChange={handleChange}
        value={formData.name}
        id="name"
        placeholder="Nombre"
      />
      <Input
        type="text"
        value={formData.phone}
        handleChange={handleChange}
        id="phone"
        placeholder="Teléfono"
      />
      <Input
        type="email"
        value={formData.email}
        handleChange={handleChange}
        id="email"
        placeholder="Correo electrónico"
      />
      <Input
        type="text"
        value={formData.service}
        handleChange={handleChange}
        id="service"
        placeholder="Servicio"
      />
      <StyledTextArea>
        <TextArea
          value={formData.comment}
          handleChange={handleChange}
          id="comment"
          placeholder="Cuéntanos sobre tu proyecto"
        />
      </StyledTextArea>
      <StyledButton>
        <SubmitButton label="Enviar" type="submit" status={status} />
      </StyledButton>
    </StyledForm>
  );
};

export { ContactForm };
