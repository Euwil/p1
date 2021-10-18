import React from "react";
import { contactLinks } from "../../constants/refs";

const ContactLinks = ({ linksList, linksItem }) => {
  return (
    <ul className={linksList}>
      {contactLinks.map(({ href, text, svg }) => (
        <li>
          <a href={href} className={linksItem}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactLinks;
