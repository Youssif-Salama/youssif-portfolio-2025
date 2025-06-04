"use client";

import React from "react";
import { FaAws } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiNestjs,
  SiGraphql,
  SiPython,
  SiGit,
  SiDocker,
  SiFirebase,
  SiFigma,
  SiGithub,
} from "react-icons/si";

const techStack = [
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Nest.js", icon: <SiNestjs /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Github", icon: <SiGithub /> },
];

const InfiniteAutoScrollTechStackIcons: React.FC = () => {
  return (
    <div className="whitespace-nowrap w-full py-4 relative
    ">
      <div className="flex w-max scroll-infinite">
        {[...Array(3)].map((_, idx) =>
          techStack.map(({ name, icon }) => (
            <span
              key={`${name}-${idx}`}
              className="flex items-center text-xl font-bold mx-6 space-x-2"
            >
              <span className="text-2xl text-current">{icon}</span>
              <span className="gradient-heading bg-clip-text text-transparent">
                {name}
              </span>
            </span>
          ))
        )}
      </div>
    </div>
  );
};

export const InversedInfiniteAutoScrollTechStackIcons: React.FC = () => {
  return (
    <div className="whitespace-nowrap w-full py-4 relative max-lg:overflow-hidden max-w-screen
    ">
      <div className="flex w-max inversed-scroll-infinite">
        {[...Array(3)].map((_, idx) =>
          techStack.map(({ name, icon }) => (
            <span
              key={`${name}-${idx}`}
              className="flex items-center text-xl font-bold mx-6 space-x-2"
            >
              <span className="text-2xl text-current">{icon}</span>
              <span className="gradient-heading bg-clip-text text-transparent">
                {name}
              </span>
            </span>
          ))
        )}
      </div>
    </div>
  );
};


export default InfiniteAutoScrollTechStackIcons;
