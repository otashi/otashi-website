import React from "react";

import { ServiceCard } from "../../components/Cards";
import { SectionSubtitle, SectionTitle } from "../../components/Titles";
import { SectionContainer } from "../../containers/Sections";

import { StyledServiceCardsContainer } from "./styles";

import designIcon from "../../assets/Design.svg";
import websiteIcon from "../../assets/Websites.svg";
import appIcon from "../../assets/Webapps.svg";

const ServicesSection = () => {
  return (
    <SectionContainer id="services">
      <SectionTitle label="Servicios" />
      <SectionSubtitle label="¿Qué necesitas?" />
      <StyledServiceCardsContainer>
        <ServiceCard
          icon={designIcon}
          label="Diseño UI/UX"
          description="Prototipado y experimentación"
          cta="Hablemos"
        />
        <ServiceCard
          icon={websiteIcon}
          label="Páginas Web"
          description="Desarrollo de tu presencia en la web"
          cta="Hablemos"
        />
        <ServiceCard
          icon={appIcon}
          label="Aplicaciones Web"
          description="Desarrollo de aplicaciones para tus clientes internos o externos"
          cta="Hablemos"
        />
      </StyledServiceCardsContainer>
    </SectionContainer>
  );
};

export { ServicesSection };
