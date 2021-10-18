import React from "react";
import { socialsList } from "../../constants/refs";

const SocialList = ({ className }) => {
  return (
    <ul className="social-list">
      {socialsList.map((social) => (
        <li>
          <a href="#" className={`social-icon-link ${className}`}>
            <img src={social} alt="social" className="social-icon" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
