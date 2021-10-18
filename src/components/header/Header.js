import React from "react";

import Container from "../blocks/Container";
import { contactLinks, navigationLinks } from "../../constants/refs";
import NavigationLinks from "./NavigationLinks";
import ContactLinks from "../common/ContactLinks";

const Header = () => {
  return (
    <Container className="header-container">
      <NavigationLinks
        linksList="navigation-list"
        linksItem="navigation-link"
        arr={navigationLinks}
      />
      <ContactLinks
        linksList="contact-list"
        linksItem="contact-link"
        arr={contactLinks}
      />
    </Container>
  );
};

export default Header;
