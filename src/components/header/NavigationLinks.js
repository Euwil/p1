import React from "react";
import { navigationLinks } from "../../constants/refs";
import Logo from "../common/Logo";

const NavigationLinks = ({ linksList, linksItem, arr }) => {
  console.log(arr);
  return (
    <div className="navigation-container">
      <Logo className="header-logo" textColor="#000" />
      <ul className={linksList}>
        {navigationLinks.map((link) => (
          <li>
            <a href="#" className={linksItem}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationLinks;
