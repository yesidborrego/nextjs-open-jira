import { ActionReducerType, IUIState } from "@/interfaces";

export const uiReducer = (
  state: IUIState,
  action: ActionReducerType
): IUIState => {
  switch (action.type) {
    case "[IU] - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "[IU] - Close Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    case "[IU] - Is Adding Entry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    case "[IU] - Start Dragging Entry":
      return {
        ...state,
        isDragging: true,
      };
    case "[IU] - End Dragging Entry":
      return {
        ...state,
        isDragging: false,
      };
    default:
      return state;
  }
};
