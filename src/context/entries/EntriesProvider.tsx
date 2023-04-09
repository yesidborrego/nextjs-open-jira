import { FC, useReducer } from "react";
import { EntriesContext, entrieReducer } from "../";
import { IChildrenPropEntries, IEntry, IEntryState } from "@/interfaces";
import { v4 as uuidv4 } from "uuid";

const entriesInitialState: IEntryState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pending: Fugiat consequat eu do dolor sint culpa exercitation.",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      _id: uuidv4(),
      description:
        "In Progress: Reprehenderit et sint sint mollit ad minim dolore et tempor.",
      createdAt: Date.now() + 10000,
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      description:
        "Done: In proident amet Lorem velit laborum enim non quis magna nulla.",
      createdAt: Date.now() + 200000,
      status: "done",
    },
  ],
};

export const EntriesProvider: FC<IChildrenPropEntries> = ({ children }) => {
  const [state, dispatch] = useReducer(entrieReducer, entriesInitialState);

  const onAddEntry = (description: string) => {
    const newEntry: IEntry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entries] - Add Entry", payload: newEntry });
  };

  const onUpdateEntry = (entry: IEntry) => {
    dispatch({ type: "[Entries] - Update Entry", payload: entry });
  };

  return (
    // <EntriesContext.Provider value={{ ...state, openSidebarMenu, closeSidebarMenu }}>
    <EntriesContext.Provider value={{ ...state, onAddEntry, onUpdateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
