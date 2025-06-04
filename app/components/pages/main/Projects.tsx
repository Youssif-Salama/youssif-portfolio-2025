"use client";

import React from "react";
import { DisclosureCard, ProjectTypeSwitcher } from "./features/ProjectFeatures";
import SectionHead from "../../features/SectionHead";

const Projects = () => {
  return (
    <section className="min-h-screen pt-8 relative" id="projects">
      <SectionHead title="Projects" />
      <div className="min-h-[70vh] ">
        <div>
          <ProjectTypeSwitcher/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
