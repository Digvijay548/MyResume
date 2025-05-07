import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="CNBG Casepacker System"
              description="PLC-based casepacking system integrated into a .NET Windows application. Facilitates high-speed pharmaceutical packaging with serialization and machine vision checkpoints.\nTechnologies Used: C#, WPF, WCF, XAML, MVVM, SQL Server, PLC Integration"
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AutoCasepacker System"
              description="Automated PLC-driven casepacker using Modbus TCP/IP for device communication. Fully integrated with .NET desktop applications.\nTechnologies Used: C#, WPF, WCF, XAML, MVVM, SQL Server, Modbus, PLC Integration"
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="In-House Web-based Application"
              description="Full-stack operational tool built with React.js frontend and ASP.NET Core backend. Included user role management, real-time updates, and unit testing with NUnit.\nTechnologies Used: React.js, .NET Core API, C#, JavaScript, HTML, CSS, SQL Server, NUnit, Git, Azure DevOps"
              ghLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
