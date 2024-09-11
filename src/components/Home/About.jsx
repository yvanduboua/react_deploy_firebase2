import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  A <span className="yellow"> PROPOS </span> DE MOI
                </h1>
                <p className="home-about-body">
                 Salut, je suis <span className="yellow">TAGNE DUBOUA YVAN </span>
                 Et je viens de <span className="yellow"> Douala, Cameroun.</span>
                <br />
                <br />
                J'ai recement obtenu une Licence en <span className="yellow">GENIE  LOGICIEL</span> en 2023 à L'IUT de Douala
                <br />
                <br />
                Je suis un développeur passionné spécialisé en <b className="yellow">React</b>, <b className="yellow">Flutter</b> et <b className="yellow">Firebase</b>.
                  <br />
                  <br />
                  Avec une expertise en <b className="yellow">HTML</b>, <b className="yellow">CSS</b> et <b className="yellow">JavaScript</b>, je crée des applications web et mobiles modernes et performantes.
                  <br />
                  <br />
                  Mon objectif est de transformer des idées en solutions <b className="yellow">innovantes</b>, tout en offrant une expérience utilisateur fluide et engageante.
                  <br />
                  <br />
                  Explorez mes <b className="yellow">projets</b> pour découvrir comment je combine <b className="yellow">créativité</b> et <b className="yellow">technologie</b> pour réaliser des applications qui répondent aux besoins des utilisateurs.
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/19sajib/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/19sajib/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About