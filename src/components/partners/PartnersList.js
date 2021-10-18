import React from "react";
import { partnersList } from "../../constants/refs";

const PartnersList = () => {
  return (
    <ul className="partner-list">
      {partnersList.map((partner) => (
        <li className="partner-list-item">
          <a href="" class="partner-link">
            <img className="partner-icon" src={partner} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PartnersList;
