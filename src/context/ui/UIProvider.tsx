import { FC, useReducer, useState } from "react";
import { UiContext, uiReducer } from "../";
import { IChildrenProp, IContextInitialProps } from "@/interfaces";

const SidebarInitialState: IContextInitialProps = {
  sideMenuOpen: false,
};

export const UIProvider: FC<IChildrenProp> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, SidebarInitialState);

  const openSidebarMenu = () => {
    dispatch({ type: "IU - Open Sidebar" });
  };

  const closeSidebarMenu = () => {
    dispatch({ type: "IU - Close Sidebar" });
  };

  return (
    <UiContext.Provider value={{ ...state, openSidebarMenu, closeSidebarMenu }}>
      {children}
    </UiContext.Provider>
  );
};
