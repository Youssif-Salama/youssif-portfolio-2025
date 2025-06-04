"use client";

import { Route } from "@/app/types/Feature.types";
import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
import HomeContext from "../context/Home.context";
import { Menu } from "lucide-react";

const routes: Route[] = [
  {
    name: "Home",
    type: "argument",
    argument: "#",
  },
  {
    name: "About",
    type: "argument",
    argument: "#about",
  },
  {
    name: "Tech Stack",
    type: "argument",
    argument: "#tech-stack",
  },
  {
    name: "Projects",
    type: "argument",
    argument: "#projects",
  },
  {
    name: "Contact",
    type: "argument",
    argument: "#contact",
  },
];

const Navbar = () => {
  const { toggleSideBar } = useContext(HomeContext);
  const [fixedNav, setFixedNav] = useState(false);
  const handleWindowScrollWithNav = useCallback(() => {
    if (window.scrollY > 100) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  }, [fixedNav, setFixedNav]);
  useEffect(() => {
    if(window.pageYOffset >100){setFixedNav(true)}
    window.addEventListener("scroll", () => {
      handleWindowScrollWithNav();
    });
    return () => {
      window.removeEventListener("scroll", handleWindowScrollWithNav);
    };
  }, []);
  return (
    <nav
      className={`  left-0 z-[1000] ${
        fixedNav ? " fixed top-5" : " top-0 "
      } flex items-center justify-between w-full `}
    >
      <div
        className={`
        container mx-auto flex items-center justify-between gap-64 p-4 bg-dark
        ${
          fixedNav &&
          "rounded-lg shadow-main-blue shadow-md bg-dark"
        }
        `}
      >
        <Link href="/">
          <h1 className="text-3xl font-bold gradient-heading bg-clip-text text-transparent max-sm:text-2xl max-w-xs:text-xl">
            {"{"} JURO {"}"}
          </h1>
        </Link>
        <div className="flex items-center gap-2 max-lg:hidden max-xl:text-md">
          <ul className="flex items-center gap-10 font-medium reversed-gradient-heading">
            {routes.map((route, index) => (
              <li key={index}>
                {route.type === "link" ? (
                  <a href={route.argument}>{route.name}</a>
                ) : (
                  <a href={route.argument}>{route.name}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div
          role="button"
          aria-label="Close"
          onClick={toggleSideBar}
          className="lg:hidden"
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
