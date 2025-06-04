import { Skill } from "@/app/types/TechStack.types";
import SectionHead from "../../features/SectionHead";
import { SkillBar } from "./features/SkillsFeatures";

const techSkills: Skill[] = [
  {
    skill: "html",
    value: 90,
  },
  {
    skill: "css",
    value: 80,
  },
  {
    skill: "javascript",
    value: 85,
  },
  {
    skill: "typescript",
    value: 80,
  },
  {
    skill: "react",
    value: 85,
  },
  {
    skill: "tailwind",
    value: 80,
  },
  {
    skill: "next",
    value: 85,
  },
  {
    skill: "git",
    value: 80,
  },
  {
    skill: "github",
    value: 90,
  },
  {
    skill: "mongodb",
    value: 80,
  },
  {
    skill: "express",
    value: 85,
  },
  {
    skill: "node",
    value: 90,
  },
  {
    skill: "nest",
    value: 80,
  },
];
const softSkills: Skill[] = [
  {
    skill: "communication",
    value: 90,
  },
  {
    skill: "teamwork",
    value: 80,
  },
  {
    skill: "leadership",
    value: 85,
  },
  {
    skill: "problem-solving",
    value: 80,
  },
  {
    skill: "creativity",
    value: 85,
  },
  {
    skill: "adaptability",
    value: 80,
  },
  {
    skill: "time management",
    value: 90,
  },
  {
    skill: "stress management",
    value: 80,
  },
  {
    skill: "critical thinking",
    value: 90,
  },
  {
    skill: "leadership",
    value: 80,
  },
];
const TechStack = () => {
  return (
    <section className="min-h-screen pt-8 relative" id="tech-stack">
      <SectionHead title="Tech Stack" />
      <p className="text-xs opacity-75 text-center">
        I’m a passionate MERN stack developer specializing in creating dynamic,
        responsive, and scalable web applications.
      </p>
      <div className="flex items-start justify-between gap-8 max-lg:flex-col pt-16 min-h-[70vh]">
        <div className="*:my-8 w-full">
          <span className="bg-gradient-heading py-2 px-6 rounded-md shadow-inner shadow-main-purple">
            Tech Skills
          </span>
          <ul className="*:mt-2">
            {techSkills.map((skill,index)=>{
              return <li key={index}>
                <SkillBar value={skill?.value} label={skill?.skill}/>
              </li>
            })}
          </ul>
        </div>
        <div className="*:my-8 w-full">
          <span className="bg-gradient-heading py-2 px-6 rounded-md shadow-inner shadow-main-purple">
            Soft Skills
          </span>
          <ul className="*:mt-2">
            {softSkills.map((skill,index)=>{
              return <li key={index}>
                <SkillBar value={skill?.value} label={skill?.skill}/>
              </li>
            })}
          </ul>
        </div>
      </div>

    </section>
  );
};

export default TechStack;
