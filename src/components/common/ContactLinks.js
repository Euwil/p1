import React from "react";
import { contactLinks } from "../../constants/refs";

const ContactLinks = ({ linksList, linksItem }) => {
  return (
    <ul className={linksList}>
      {contactLinks.map(({ href, text, svg }) => (
        <li>
          <a href={href} className={linksItem}>
            <img src={svg} alt="icon" className="contact-icon" />
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactLinks;
