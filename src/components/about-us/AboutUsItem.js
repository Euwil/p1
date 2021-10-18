import React from "react";
import { aboutUs } from "../../constants/refs";

const AboutUsItem = () => {
  return (
    <ul className="about-us-list">
      {aboutUs.map(({ svg, title, text }) => (
        <li className="about-us-item">
          <div className="icon-container">
            <img className="about-us-icon" src={svg} alt="about us icon" />
          </div>
          <h3 className="item-title">{title}</h3>
          <p className="about-us-desc">{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default AboutUsItem;
