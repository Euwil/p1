import React from "react";
import Container from "../blocks/Container";
import ContactContainer from "./ContactContainer";
import MailingContainer from "./MailingContainer";
import SocialsContainer from "./SocialsContainer";

const Footer = () => {
  return (
    <footer>
      <Container className="footer-container">
        <ContactContainer />
        <SocialsContainer />
        <MailingContainer />
      </Container>
    </footer>
  );
};

export default Footer;
