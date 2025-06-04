"use client";
import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Variants, Transition } from "motion/react";

import React, { useState } from "react";
import { TransitionPanel } from "@/components/ui/transition-panel";
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "@/components/ui/disclosure";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export interface Project {
  title: string;
  link: [boolean, boolean, string];
  description: string;
  img: string;
  techStacks: string[];
  role: string;
}

export interface ProjectType {
  title: string;
  subtitle?: string;
  content?: string;
  banner: string;
  projects?: Project[];
}

export function DisclosureCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  const imageVariants = {
    collapsed: { scale: 1, filter: "blur(0px)" },
    expanded: { scale: 1.1, filter: "blur(3px)" },
  };

  const contentVariants = {
    collapsed: { opacity: 0, y: 0 },
    expanded: { opacity: 1, y: 0 },
  };

  const transition = {
    type: "spring",
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2,
  };

  return (
    <div className="relative h-[350px] overflow-hidden rounded-md shadow-md shadow-main-blue my-6 border-2">
      <div className="bg-main-blue absolute top-2 left-2 p-2 rounded-md z-50 text-[10px] shadow-inner shadow-main-purple text-white">
        {project?.role}
      </div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <motion.img
          src={project?.img}
          alt={project?.title}
          className="pointer-events-none h-[500px] w-full select-none rounded-md object-cover"
          animate={isOpen ? "expanded" : "collapsed"}
          variants={imageVariants}
          transition={transition}
        />
      </div>
      <Disclosure
        onOpenChange={setIsOpen}
        open={isOpen}
        className="absolute bottom-0 left-0 right-0 rounded-md "
        variants={contentVariants}
        transition={transition}
      >
        <DisclosureTrigger>
          <button
            className="w-full text-[14px] rounded-md p-2 text-center font-bold text-[#191919]"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {project?.title}
          </button>
        </DisclosureTrigger>
        <DisclosureContent>
          <DialogCustomVariantsTransition project={project} />
        </DisclosureContent>
      </Disclosure>
    </div>
  );
}

export function ProjectTypeSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ProjectsTypes: ProjectType[] = [
    {
      title: "All",
      banner: "/projects/all.jpg",
      projects: [
        {
          title: "Lite Pay",
          link: [true, true, "https://www.litepay-eg.net"],
          description:
            "Lite Pay is a virtual card service that helps people in Egypt buy things online from other countries. It's like a regular debit card, but you load it up with money and use it for online shopping. This is really helpful because many Egyptian debit cards don't work for international purchases.",
          img: "/projects/subPImages/litepay.png",
          techStacks: [
            "Nextjs",
            "Tailwindcss",
            "Typescript",
            "Nodejs",
            "Express",
            "Postgres",
          ],
          role: "Full Stack Developer - specialy in the backend part - freelance",
        },
        {
          title: "Tatweer El Bawady",
          link: [false, false, "Custom Software Service"],
          description:
            "Developed a comprehensive system for Tatweer Al-Bawadi, a Saudi Arabian real estate company, to automate their operations and streamline property management. The system efficiently handles land parcels, properties, tenants, and landlords, while also providing in-depth analytics for profit tracking. Key features include a real-time chat application for seamless communication and a to-do application for effective task management. This robust system significantly improved operational efficiency and enhanced overall business performance.",
          img: "/projects/subPImages/tatweer.png",
          techStacks: [
            "React",
            "Tailwindcss",
            "Typescript",
            "Nodejs",
            "Express",
            "MongoDB",
          ],
          role: "Full Stack Developer - freelance",
        },
        {
          title: "Proteen",
          link: [
            true,
            false,
            "https://drive.google.com/file/d/1hP0f6Rkwd-MDgPbyWtkEmyKu1V80jtk0/view",
          ],
          description:
            "Developed an e-commerce application specializing in the sale of gym supplements and personal care products. The platform offers a wide range of products, including protein powders, creatine, and other fitness essentials, catering to health-conscious users and fitness enthusiasts.",
          img: "/projects/subPImages/proten.png",
          techStacks: [
            "React",
            "Tailwindcss",
            "Javascript",
            "Php",
            "SQL Server",
          ],
          role: "Frontend Developer - lxdyi company",
        },
        {
          title: "Ba7r",
          link: [
            true,
            false,
            "https://drive.google.com/file/d/1EDfu2TJH9Yk88jN9rY5WqphRS3iIX8p4/view",
          ],
          description:
            "Developed a mobile application and dashboard platform for managing a seaside tourist village in the UAE. The platform facilitates the listing of advertisements and services, along with a comprehensive management system for users, subscribers, and local businesses within the village.",
          img: "/projects/subPImages/ba7r.png",
          techStacks: [
            "React",
            "Tailwindcss",
            "Javascript",
            ".Net",
            "SQL Server",
            "Flutter",
          ],
          role: "Frontend Developer - lxdyi company",
        },
        {
          title: "Shary",
          link: [true, false, "source not found"],
          description:
            "Developed an e-commerce platform specializing in the sale of gym equipment. The platform offers a wide range of products, including dumbbells, barbells, and exercise machines, catering to fitness enthusiasts and gym owners.",
          img: "/projects/subPImages/shary.png",
          techStacks: [
            "React",
            "Tailwindcss",
            "Javascript",
            ".Net",
            "SQL Server",
          ],
          role: "Frontend Developer - lxdyi company",
        },
        {
          title: "TODO",
          link: [
            true,
            false,
            "https://vite-react-114m77fpv-youssifs-projects.vercel.app/login",
          ],
          description:
            "Task management system for a any one, it helps users to manage their tasks and projects efficiently.",
          img: "/projects/subPImages/todo.png",
          techStacks: [
            "React",
            "Bootstrap",
            "Typescript",
            "Nodejs",
            "Express",
            "MongoDB",
          ],
          role: "Full Stack Developer - task",
        },
        {
          title: "Shop.co",
          link: [
            true,
            false,
            "https://e-commerce-file-sys-app-next.onrender.com/",
          ],
          description:
            "Shop.co is a landing page for an ecommerce website, it allows users to explore the products and services offered by the website.",
          img: "/projects/subPImages/shopco.png",
          techStacks: ["Nextjs", "Tailwindcss", "Typescript"],
          role: "Frontend Developer - task",
        },
        {
          title: "positivus",
          link: [
            true,
            false,
            "https://positivus-landing-4x3h8su1p-youssifs-projects.vercel.app/",
          ],
          description: "Landing page, it allows users to explore the products and services offered by the website.",
          img: "/projects/subPImages/positivus.png",
          techStacks: ["Next", "Tailwindcss", "Typescript"],
          role: "Frontend Developer - task",
        },
      ],
    },
    {
      title: "E-commerce",
      subtitle: "Online Shopping Experiences",
      content:
        "Explore how motion design enhances user experiences in e-commerce, from product animations to interactive shopping interfaces that drive engagement and sales.",
      banner: "/projects/ecomm.jpg",
      projects: [
        {
          title: "Proteen",
          link: [
            true,
            false,
            "https://drive.google.com/file/d/1hP0f6Rkwd-MDgPbyWtkEmyKu1V80jtk0/view",
          ],
          description:
            "Developed an e-commerce application specializing in the sale of gym supplements and personal care products. The platform offers a wide range of products, including protein powders, creatine, and other fitness essentials, catering to health-conscious users and fitness enthusiasts.",
          img: "/projects/subPImages/proten.png",
          techStacks: [
            "React",
            "Tailwindcss",
            "Javascript",
            "Php",
            "SQL Server",
          ],
          role: "Frontend Developer - lxdyi company",
        },
        {
          title: "Ba7r",
          link: [
            true,
            false,
            "https://drive.google.com/file/d/1EDfu2TJH9Yk88jN9rY5WqphRS3iIX8p4/view",
          ],
          description:
            "Developed a mobile application and dashboard platform for managing a seaside tourist village in the UAE. The platform facilitates the listing of advertisements and services, along with a comprehensive management system for users, subscribers, and local businesses within the village.",
          img: "/projects/subPImages/ba7r.png",
          techStacks: [
            "React",
            "Tailwindcss",
            "Javascript",
            ".Net",
            "SQL Server",
            "Flutter",
          ],
          role: "Frontend Developer - lxdyi company",
        },
        {
          title: "Shary",
          link: [true, false, "source not found"],
          description:
            "Developed an e-commerce platform specializing in the sale of gym equipment. The platform offers a wide range of products, including dumbbells, barbells, and exercise machines, catering to fitness enthusiasts and gym owners.",
          img: "/projects/subPImages/shary.png",
          techStacks: [
            "React",
            "Tailwindcss",
            "Javascript",
            ".Net",
            "SQL Server",
          ],
          role: "Frontend Developer - lxdyi company",
        },
      ],
    },
    {
      title: "Landing Pages",
      subtitle: "Engaging First Impressions",
      content:
        "Discover the power of motion design in creating visually captivating landing pages that captivate visitors and drive conversions.",
      banner: "/projects/landings.jpg",
      projects: [
        {
          title: "positivus",
          link: [
            true,
            false,
            "https://positivus-landing-4x3h8su1p-youssifs-projects.vercel.app/",
          ],
          description: "Landing page, it allows users to explore the products and services offered by the website.",
          img: "/projects/subPImages/positivus.png",
          techStacks: ["Next", "Tailwindcss", "Typescript"],
          role: "Frontend Developer - task",
        },
      ],
    },
    {
      title: "SaaS",
      subtitle: "Streamlined Software Solutions",
      content:
        "Discover the power of motion design in creating visually captivating landing pages that captivate visitors and drive conversions.",
      banner: "/projects/sass.jpg",
      projects: [
        {
          title: "Lite Pay",
          link: [true, true, "https://www.litepay-eg.net"],
          description:
            "Lite Pay is a virtual card service that helps people in Egypt buy things online from other countries. It's like a regular debit card, but you load it up with money and use it for online shopping. This is really helpful because many Egyptian debit cards don't work for international purchases.",
          img: "/projects/subPImages/litepay.png",
          techStacks: [
            "Nextjs",
            "Tailwindcss",
            "Typescript",
            "Nodejs",
            "Express",
            "Postgres",
          ],
          role: "Full Stack Developer - specialy in the backend part - freelance",
        },
        {
          title: "Tatweer El Bawady",
          link: [false, false, "Custom Software Service"],
          description:
            "Developed a comprehensive system for Tatweer Al-Bawadi, a Saudi Arabian real estate company, to automate their operations and streamline property management. The system efficiently handles land parcels, properties, tenants, and landlords, while also providing in-depth analytics for profit tracking. Key features include a real-time chat application for seamless communication and a to-do application for effective task management. This robust system significantly improved operational efficiency and enhanced overall business performance.",
          img: "/projects/subPImages/tatweer.png",
          techStacks: [
            "React",
            "Tailwindcss",
            "Typescript",
            "Nodejs",
            "Express",
            "MongoDB",
          ],
          role: "Full Stack Developer - freelance",
        },
      ],
    },
    {
      title: "Custom Solutions - Training",
      subtitle: "Tailored Solutions for Your Business",
      content:
        "Explore how motion design can be customized to meet the unique needs of your business, enhancing user experiences and driving engagement.",
      banner: "/projects/custom.jpg",
      projects: [
        {
          title: "TODO",
          link: [
            true,
            false,
            "https://vite-react-114m77fpv-youssifs-projects.vercel.app/login",
          ],
          description:
            "Task management system for a any one, it helps users to manage their tasks and projects efficiently.",
          img: "/projects/subPImages/todo.png",
          techStacks: [
            "React",
            "Bootstrap",
            "Typescript",
            "Nodejs",
            "Express",
            "MongoDB",
          ],
          role: "Full Stack Developer - task",
        },
        {
          title: "Shop.co",
          link: [
            true,
            false,
            "https://e-commerce-file-sys-app-next.onrender.com/",
          ],
          description:
            "Shop.co is a landing page for an ecommerce website, it allows users to explore the products and services offered by the website.",
          img: "/projects/subPImages/shopco.png",
          techStacks: ["Nextjs", "Tailwindcss", "Typescript"],
          role: "Frontend Developer - task",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="mb-4 flex space-x-2">
        {ProjectsTypes.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-md px-3 py-1 text-sm font-medium ${
              activeIndex === index
                ? "bg-gradient-heading text-white shadow-inner shadow-main-purple"
                : "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="overflow-hidden">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
          }}
        >
          {ProjectsTypes.map((item, index) => (
            <div key={index} className="py-2">
              <Image
                src={item.banner}
                alt={item.title}
                width={600}
                height={200}
                className="w-full max-md:h-[150px] h-[300px] rounded-md mb-4 object-cover md:blur-xs"
              />
              <h3 className="mb-2 font-medium text-zinc-800 dark:text-zinc-100">
                {item.subtitle}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">{item.content}</p>
              <div className="gird grid lg:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
                {item?.projects &&
                  item?.projects.map((project, idx) => (
                    <DisclosureCard key={idx} project={project} />
                  ))}
              </div>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}

export function DialogCustomVariantsTransition({
  project,
}: {
  project: Project;
}) {
  const customVariants: Variants = {
    initial: {
      scale: 0.9,
      filter: "blur(10px)",
      y: "100%",
    },
    animate: {
      scale: 1,
      filter: "blur(0px)",
      y: 0,
    },
  };

  const customTransition: Transition = {
    type: "spring",
    bounce: 0,
    duration: 0.4,
  };

  return (
    <Dialog variants={customVariants} transition={customTransition}>
      <DialogTrigger>
        <div className="flex flex-col pb-4 text-[13px] p-4 bg-gradient-heading text-center">
          <p className="line-clamp-3">{project?.description}</p>
          <div role="button"
            className="mt-4 py-2 px-6 rounded-md shadow-inner shadow-main-purple
              bg-reversed-gradient-heading
              "
          >
            Learn More
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md bg-white p-6 dark:bg-zinc-900">
        <DialogHeader>
          <Image
            src={project?.img}
            alt={project?.title}
            width={500}
            height={500}
          />
          <DialogTitle className="text-zinc-900 dark:text-white">
            {project?.title}
          </DialogTitle>
          <DialogDescription className="text-zinc-600 dark:text-zinc-400">
            <div>{project?.description}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStacks.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-main-blue text-white px-2 py-1 rounded-md mr-2 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <button className="mt-6 flex flex-col space-y-4 bg-reversed-gradient-heading text-white w-full rounded-md shadow-inner shadow-main-blue p-2">
          {(project?.link[0] || project?.link[1]) && (
            <Link href={project?.link[2]} target="_blank">
              Preview
            </Link>
          )}
        </button>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}
