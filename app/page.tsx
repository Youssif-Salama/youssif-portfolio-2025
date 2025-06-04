"use client";
import Home from "./components/pages/main/Home";
import SideList from "./components/features/SideList";
import React from "react";
import HomeContext from "./components/context/Home.context";
import About from "./components/pages/main/About";
import TechStack from "./components/pages/main/TechStack";
import Projects from "./components/pages/main/Projects";
import Contact from "./components/pages/main/Contact";

export default function Main() {
  const { homeState, setHomeState, toggleSideBar } = React.useContext(HomeContext);
  return (
    <div className="container mx-auto px-4 max-lg:overflow-hidden">
      <SideList
        open={homeState.sidebar.isOpen}
        handleOpenSideList={toggleSideBar}
        setHomeState={setHomeState}
      />
      <Home />
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
    </div>
  );
}
