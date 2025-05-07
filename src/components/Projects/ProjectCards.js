import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view bg-dark text-light shadow-lg border-0">
      <Card.Body>
        <Card.Title className="fw-bold fs-5 mb-3">{props.title}</Card.Title> {/* Added margin bottom to create space */}
        <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
          {props.description}
        </Card.Text>

        
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
