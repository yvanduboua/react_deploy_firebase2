import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiFirebase,
  SiHeroku,
  SiNetlify
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="title">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="title">Github</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div className="title">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <div className="title">Netlify</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <div className="title">Heroku</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
