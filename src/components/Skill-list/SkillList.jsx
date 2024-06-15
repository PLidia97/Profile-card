import React from "react";

import "./SkillList.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#ffff00",
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "#ffa500",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#00ff00",
  },
  {
    skill: "Git & GitHub",
    level: "beginner",
    color: "#E84F33",
  },
];

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skills skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
};

export default SkillList;

const Skills = ({ skill, color, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
      </span>
    </div>
  );
};
