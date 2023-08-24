import React from "react";
import "./Experiance.css";
import { Element } from "react-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Experiance = () => {
  return (
    <Element id="experiance">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="5">
            <Card className="red" style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title><h4>Education</h4></Card.Title>
                <br />
                <h6 class="text-weight-bold text-success"><h6><b>2018 - 2020</b></h6></h6>
                <p class="text-weight-bold">
                  Master of Business Administration
                  <br />
                  (HR & MARKETING)
                </p>
                <p className="text-danger"><b>Paavai Engineering College(Autonomous) Namakkal.</b></p>
                <hr />
                <h6 class="text-weight-bold text-success"><b>2013 - 2017</b></h6>
                <p>B.E Mechanical Engineering</p>
                <p class="subtitle text-danger">
                  <b>Mahendra Engineering College(Autonomous) Namakkal.</b>
                </p>
                <hr />
                <h6 class="text-weight-bold text-success"><b>2012 - 2013</b></h6>
                <p>Higher Secondary</p>
                <p>
                  <b className="text-danger">Bharathi Matriculation Higher Secondary School, Gandhinagar,
                  Salem.</b>
                </p>
              </Card.Body>
            </Card>
          </Col>



          <Col lg="4">
            <Card className="red" style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title><h4>Work Experience</h4></Card.Title>
                <Card.Text>
                  <br />
                  <h6 class=" text-success"><h6>Apr-2023 to Jul-2023</h6></h6>
                  <p class="text-danger"><b>AEM Web Developer</b></p>
                  <p class=""><b>Outworks solutions pvt ltd</b></p>
                  <p>
                    Worked as a AEM developer around 4 months in Azure Websites
                  </p>

                  <h6 class="text-success text-weight-bold">
                    Feb-2021 to Mar-2023
                  </h6>
                  <p class="text-danger"><b>Web Developer / SEO Analyst</b></p>
                  <p><b>AlltechZ Solutions Pvt Ltd , Chennai.</b></p>
                  <p>
                    Worked as a Web Developer/SEO Analyst in AlltechZ solutions
                    with 2+ years experience
                  </p>
                  <hr />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default Experiance;
