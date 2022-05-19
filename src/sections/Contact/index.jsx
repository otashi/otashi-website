import React from "react";

import { ContactData } from "../../components/Contact";
import { SectionSubtitle, SectionTitle } from "../../components/Titles";
import { SectionContainer } from "../../containers/Sections";
import { ContactForm } from "../../components/Forms";

import {
  StyledContactContainer,
  StyledContactDataContainer,
  StyledContactForm,
} from "./styles";

import phone from "../../assets/phone.svg";
import email from "../../assets/envelope.svg";

const ContactSection = () => {
  return (
    <SectionContainer id="contact">
      <SectionTitle label="Contáctanos" />
      <SectionSubtitle label="¿Tienes un proyecto y necesitas nuestra ayuda?" />
      <StyledContactContainer>
        <StyledContactDataContainer>
          <ContactData icon={phone} label="Teléfono" data="+57 310 780 4751" />
          <ContactData
            icon={email}
            label="Correo electrónico"
            data="help@otashi.digital"
          />
        </StyledContactDataContainer>
        <StyledContactForm>
          <ContactForm />
        </StyledContactForm>
      </StyledContactContainer>
    </SectionContainer>
  );
};

export { ContactSection };
