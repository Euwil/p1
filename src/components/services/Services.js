import React from "react";
import Container from "../blocks/Container";
import Section from "../blocks/Section";
import SectionTitle from "../common/SectionTitle";
import ServicesList from "./ServicesList";

const Services = () => {
  return (
    <Section>
      <Container>
        <SectionTitle text="Чем мы занимаемся" />
        <ServicesList />
      </Container>
    </Section>
  );
};

export default Services;
