export interface IContextInitialProps {
  sideMenuOpen: boolean;
}

export interface IContextProps {
  sideMenuOpen: boolean;
  openSidebarMenu: () => void;
  closeSidebarMenu: () => void;
}

export interface IChildrenProp {
  children: JSX.Element[] | JSX.Element;
}

export type ActionReducerType =
  | { type: "IU - Open Sidebar" }
  | { type: "IU - Close Sidebar" };
