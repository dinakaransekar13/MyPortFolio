import image from "./../../assest/azure.jpeg";
import image1 from "./../../assest/ats.jpeg";
import { Container } from "@mui/material";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Element } from "react-scroll";
import './ProjectContainer.css'


const ProjectContainer = () => {
  return (
<Element  id="project">
  <h2 className="text-light text-center">My <span>Projects</span></h2>
  <Container className="myproject">
    
    <Row className="justify-content-md-center">
      <Col lg="4">
        <Card  style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Microsoft Project</Card.Title>
            <Card.Text>
             Developed Microsoft Website By using AEM Platform.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>


      <Col  lg="3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image1} />
          <Card.Body>
            <Card.Title>SEO</Card.Title>
            <Card.Text>
              Worked as SEO Analyst to Boost our Website in Google.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</Element>
  );
};

export default ProjectContainer;
