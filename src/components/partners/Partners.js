import React from "react";
import Container from "../blocks/Container";
import Section from "../blocks/Section";
import SectionTitle from "../common/SectionTitle";
import PartnersList from "./PartnersList";

const Partners = () => {
  return (
    <Section>
      <Container>
        <SectionTitle text="Постоянные клиенты" />
        <PartnersList />
      </Container>
    </Section>
  );
};

export default Partners;
