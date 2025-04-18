import React from "react";
import {
  SiVisualStudioCode,
  SiGithub,
  SiFirebase,
  SiHeroku,
  SiNetlify
} from "react-icons/si";

import './SkillBox.css';


const Tech = ({ Icon, title }) => {
  return (
      <div className="skill-box">
        <Icon className="skill-icon" />
        <h3 className="title">{title}</h3>
      </div>
  );
};

const Toolstack = () => {
  return (

    <div className="skills-container">
      <Tech Icon={SiVisualStudioCode} title="VS Code" />
      <Tech Icon={SiGithub} title="Github" />
      <Tech Icon={SiFirebase} title="Firebase" />
      <Tech Icon={SiNetlify} title="Netlify" />
      <Tech Icon={SiHeroku} title="Heroku" />
    </div>
  );
}

export default Toolstack;
