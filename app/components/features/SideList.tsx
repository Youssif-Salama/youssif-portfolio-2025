"use client";

import { Route } from "@/app/types/Feature.types";
import { useCallback, useEffect } from "react";
import { CgClose } from "react-icons/cg";

const routes: Route[] = [
  { name: "Home", type: "argument", argument: "#" },
  { name: "About", type: "argument", argument: "#about" },
  { name: "Tech Stack", type: "argument", argument: "#tech-stack" },
  { name: "Projects", type: "argument", argument: "#projects" },
  { name: "Contact", type: "argument", argument: "#contact" },
];

const SideList = ({
  open,
  handleOpenSideList,
  setHomeState
}: {
  open: boolean;
  setHomeState: React.Dispatch<React.SetStateAction<any>>;
  handleOpenSideList: () => void;
}) => {
  const handleClickOutSideTheSideBar = useCallback(
    (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        e.target.closest("#side-list") == null
      ) {
        setHomeState((prev: any) => {
          return { ...prev, sidebar: { isOpen: false } };
        });
      }
    },
    [handleOpenSideList]
  );

  useEffect(() => {
    window.addEventListener("click", handleClickOutSideTheSideBar);
    return () => {
      window.removeEventListener("click", handleClickOutSideTheSideBar);
    };
  }, []);

  return (
    <div
      className={`bg-gradient-heading fixed top-0 left-0 h-full w-[70%] z-[1000]
        ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out
        `}
      id="side-list"
    >
      <div
        className="absolute top-2 right-2"
        onClick={handleOpenSideList}
        role="button"
        aria-label="Close"
      >
        <CgClose className="text-2xl cursor-pointer" />
      </div>
      <ul className="h-full grid grid-rows-5 font-medium">
        {routes.map((route, index) => (
          <li
            key={index}
            className="border-b-2 border-dark last:border-0 cursor-pointer flex items-center justify-center hover:bg-main-blue transition-colors duration-300"
          >
            {route.type === "argument" ? (
              <a
                href={route.argument}
                className="w-full h-full flex items-center justify-center"
              >
                {route.name}
              </a>
            ) : (
              <span>{route.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideList;
