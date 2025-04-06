import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import SkillBox from "../components/Skillset/SkillBox";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="yellow">Compétences </strong> professionnelles
        </h1>

        <SkillBox />
        {/* <Techstack /> */}

        <h1 className="project-heading">
          <strong className="yellow">Outils</strong> Que j'utilise
        </h1>
        <Toolstack />

        {/* <Leetcode /> */}
        {/* <Github /> */}
      </Container>
    </Container>
  )
}

export default Skillset