import {
  ActionReducerTypeEntries,
  IContextPropsEntries,
  IEntryState,
} from "@/interfaces";

export const entrieReducer = (
  state: IEntryState,
  action: ActionReducerTypeEntries
): IEntryState => {
  switch (action.type) {
    case "[Entries] - Add Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "[Entries] - Update Entry":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.description = action.payload.description;
            entry.status = action.payload.status;
          }
          return entry;
        }),
      };
    default:
      return state;
  }
};
