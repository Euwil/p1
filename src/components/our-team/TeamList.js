import React from "react";
import { teamMembers } from "../../constants/refs";
import SocialList from "../common/SocialList";

const TeamList = () => {
  return (
    <ul className="team-list">
      {teamMembers.map(({ img, name, position }) => (
        <li className="team-item">
          <img src={img} className="member-photo" alt="member" />
          <p className="member-name">{name}</p>
          <p className="member-position">{position}</p>
          <SocialList />
        </li>
      ))}
    </ul>
  );
};

export default TeamList;
