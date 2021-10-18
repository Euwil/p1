import React from "react";
import Container from "../blocks/Container";
import Section from "../blocks/Section";
import SectionTitle from "../common/SectionTitle";
import TeamList from "./TeamList";

const OurTeam = () => {
  return (
    <Section className="our-team">
      <Container>
        <SectionTitle text="Наша команда" />
        <TeamList />
      </Container>
    </Section>
  );
};

export default OurTeam;
