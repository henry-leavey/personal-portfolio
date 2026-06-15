import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          {/* IMAGE */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact"
                />
              }
            </TrackVisibility>
          </Col>

          {/* TEXT */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  <h2>Get In Touch</h2>

                  <p style={{ marginTop: "15px", fontSize: "16px" }}>
                    The easiest way to contact me is through LinkedIn or email.
                  </p>

                  {/* LINKS */}
                  <div style={{ marginTop: "25px", display: "flex", flexDirection: "column", gap: "12px" }}>

                    <a
                      href="https://www.linkedin.com/in/henry-leavey/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Connect on LinkedIn
                    </a>

                    <a
                      href="mailto:nnoleman138@gmail.com"
                      className="btn btn-outline-light"
                    >
                      Send me an Email
                    </a>

                  </div>

                  {/* OPTIONAL NOTE */}
                  <p style={{ marginTop: "20px", fontSize: "14px", opacity: 0.8 }}>
                    Feel free to reach out about projects, collaborations, or questions.
                  </p>

                </div>
              }
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  );
};