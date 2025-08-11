import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AI-Powered Software Configuration Optimiser",
      description: "Developed a cloud-based system to automatically identify high-performing software configurations using CART-based SMBO",
      imgUrl: projImg1
    },
    {
      title: "Robotics Group Project",
      description: "Developed a system for running a robot on wheels",
      imgUrl: projImg2,
      url: "https://www.youtube.com/watch?v=IJb8-PtCQ5Y"
    },
    {
      title: "Unity Basketball Video Game",
      description: "Developing a video game for fun and programming practice",
      imgUrl: projImg3
    },
    {
      title: "Nail Salon Website",
      description: "Fully deployed and running business website for viewing",
      imgUrl: projImg4,
      url: "https://vnnailandspa.com/"
    },
    {
      title: "MNIST AI Project",
      description: "AI neural network built from scratch",
      imgUrl: projImg5
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I've built a range of projects that demonstrate my skills in machine learning, full-stack development, and software engineering. These include AI agents using Unity ML-Agents, data-driven applications with Python and TensorFlow, and interactive web apps built with modern JavaScript frameworks. Each project reflects a strong focus on practical problem-solving, clean architecture, and efficient performance.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
