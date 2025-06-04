"use client";

import React, { createContext } from "react";

const HomeContext: React.Context<any> = createContext("HomeContext");

export const HomeProvider = ({ children }: { children: React.ReactNode }) => {
  const [homeState, setHomeState]: any = React.useState({
    sidebar: {
      isOpen: false,
    },
  });
  const toggleSideBar = React.useCallback(() => {
    setHomeState((prev: any) => {
      return { ...prev, sidebar: { isOpen: !prev.sidebar.isOpen } };
    });
  }, [homeState.sidebar.isOpen]);
  return (
    <HomeContext.Provider value={{ homeState, setHomeState, toggleSideBar }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
