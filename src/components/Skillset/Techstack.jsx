import React from "react";
import { Col, Row } from "react-bootstrap";
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

import './Techstack.css'

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons tech">
        <SiHtml5 />
        <div className="title">html 5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="title">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="title">Nodejs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="title">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <div className="title">C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
        <div className="title">Dart</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <div className="title">Flutter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <div className="title">Css 3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <div className="title">Angular</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="title">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
