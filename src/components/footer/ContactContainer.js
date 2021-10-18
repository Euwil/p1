import React from "react";
import FooterContactList from "./FooterContactList";
import Logo from "../common/Logo";

const ContactContainer = () => {
  return (
    <div className="footer-contact-container">
      <Logo textColor="#FFF" className="footer-logo" />
      <address>г. Киев, пр-т Леси Украинки, 26</address>
      <FooterContactList
        linksList="footer-contact-list"
        linksItem="footer-contact-link"
      />
    </div>
  );
};

export default ContactContainer;
