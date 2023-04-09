export interface IUIState {
  isAddingEntry: boolean;
  isDragging: boolean;
  sideMenuOpen: boolean;
}

export interface IContextProps {
  isAddingEntry: boolean;
  sideMenuOpen: boolean;
  isDragging: boolean;
  onCloseSidebarMenu: () => void;
  onEndDragginEntry: () => void;
  onOpenSidebarMenu: () => void;
  onSetIsAddingEntry: (isAdding: boolean) => void;
  onStartDragginEntry: () => void;
}

export interface IChildrenProp {
  children: JSX.Element[] | JSX.Element;
}

export type ActionReducerType =
  | { type: "[IU] - Open Sidebar" }
  | { type: "[IU] - Close Sidebar" }
  | { type: "[IU] - Is Adding Entry"; payload: boolean }
  | { type: "[IU] - Start Dragging Entry" }
  | { type: "[IU] - End Dragging Entry" };
