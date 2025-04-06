import React from 'react'
import SkillBox from "../components/Skillset/SkillBox";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bonjour!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Je suis  <span> </span>
                <strong className="main-name">
                  <span className="float">T</span>
                  <span className="float">a</span>
                  <span className="float">g</span>
                  <span className="float">n</span>
                  <span className="float">e</span>
                  <span> </span>
                  <span className="float" aria-labelledby="float">Y</span>
                  <span className="float" aria-labelledby="float">v</span>
                  <span className="float" aria-labelledby="float">a</span>
                  <span className="float" aria-labelledby="float">n</span>
                </strong>
              </h1>

              <div style={{ padding: 20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
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
      <About />
    </section>
  );
}

export default Home