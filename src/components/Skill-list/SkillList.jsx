import React from "react";
import Skills from "../Skills/Skills";
import "./SkillList.css";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skills skill="HTML+CSS" emoji="💪" color="yellow" />
      <Skills skill="JavaScript" emoji="💪" color="orange" />
      <Skills skill="React" emoji="💪" color="lime" />
    </div>
  );
};

export default SkillList;
