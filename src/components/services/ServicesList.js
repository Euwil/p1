import React from "react";
import { ourServices } from "../../constants/refs";

const ServicesList = () => {
  return (
    <ul className="services-list">
      {ourServices.map(({ img, title }) => (
        <li className="services-item">
          <img src={img} alt="services" />
          <h3 className="services-title">{title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
