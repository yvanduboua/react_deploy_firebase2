import React from 'react';

import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiGit,
  } from "react-icons/di";
  
  import {
    SiFlutter,
    SiCss3,
    SiDart,
    SiAngular,
    SiC,
    SiHtml5
  } from "react-icons/si";

import './SkillBox.css';

const Skill = ({ Icon, title }) => {
    return (
        <div className="skill-box">
            <Icon className="skill-icon" />
            <h3 className="title">{title}</h3>
        </div>
    );
};

const SkillBox = () => {

    return (
        <div className="skills-container">
            <Skill Icon={SiHtml5} title="HTML 5" />
            <Skill Icon={SiCss3} title="CSS 3" />
            <Skill Icon={DiJavascript1} title="JavaScript" />
            <Skill Icon={DiNodejs} title="Node.js" />
            <Skill Icon={DiReact} title="React" />
            <Skill Icon={SiAngular} title="Angular" />
            <Skill Icon={SiC} title="C" />
            <Skill Icon={DiGit} title="Git" />
            <Skill Icon={SiDart} title="Dart" />
            <Skill Icon={SiFlutter} title="Flutter" />
        </div>
    );
};

export default SkillBox;
