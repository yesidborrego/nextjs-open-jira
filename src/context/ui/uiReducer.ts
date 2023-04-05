import {
  ActionReducerType,
  IContextInitialProps,
  IContextProps,
} from "@/interfaces";

export const uiReducer = (
  state: IContextInitialProps,
  action: ActionReducerType
): IContextInitialProps => {
  switch (action.type) {
    case "IU - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "IU - Close Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    default:
      return state;
  }
};
