import React from "react";
import ProjectItem from "../../components/ProjectItem";
import { project } from "../../data";
import "./Project.css"
const Project = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Projects</span>
      </h2>
      <div className="portfolio__container container grid">
        {project.map((item) => {
          return <ProjectItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Project;
