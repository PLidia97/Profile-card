import React from "react";
import "./Description.css";
import SkillList from "../Skill-list/SkillList";

const Description = () => {
  return (
    <div className="description">
      <h1>Popescu Lidia</h1>
      <p>
        At the beginning of codding jurney. I hope that one day i'll get the
        hang of it :)
      </p>
      <SkillList />
    </div>
  );
};

export default Description;
