import { FC, useReducer } from "react";
import { UiContext, uiReducer } from "../";
import { IChildrenProp, IUIState } from "@/interfaces";

const SidebarInitialState: IUIState = {
  isAddingEntry: false,
  isDragging: false,
  sideMenuOpen: false,
};

export const UIProvider: FC<IChildrenProp> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, SidebarInitialState);

  const onOpenSidebarMenu = () => {
    dispatch({ type: "[IU] - Open Sidebar" });
  };

  const onCloseSidebarMenu = () => {
    dispatch({ type: "[IU] - Close Sidebar" });
  };

  const onSetIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "[IU] - Is Adding Entry", payload: isAdding });
  };

  const onStartDragginEntry = () => {
    dispatch({ type: "[IU] - Start Dragging Entry" });
  };

  const onEndDragginEntry = () => {
    dispatch({ type: "[IU] - End Dragging Entry" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        onCloseSidebarMenu,
        onOpenSidebarMenu,
        onSetIsAddingEntry,
        onStartDragginEntry,
        onEndDragginEntry,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
