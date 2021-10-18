import React from "react";
import Container from "../blocks/Container";
import Section from "../blocks/Section";
import Button from "../common/Button";

const Hero = () => {
  return (
    <Section className="hero">
      <Container className="hero-container">
        <h1 className="hero-title">Эффективные решения для вашего бизнеса</h1>
        <Button className="hero-btn" type="button">
          Заказать услугу
        </Button>
      </Container>
    </Section>
  );
};

export default Hero;
