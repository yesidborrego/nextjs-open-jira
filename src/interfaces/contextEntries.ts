export interface IContextPropsEntries {
  entries: IEntry[];
  onAddEntry: (entry: string) => void;
  onUpdateEntry: (entry: IEntry) => void;
}

export interface IEntryState {
  entries: IEntry[];
}

export interface IEntryProps {
  entry: IEntry;
}

export interface IEntry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus;
}

export type EntryStatus = "pending" | "in-progress" | "done";

export interface IChildrenPropEntries {
  children: JSX.Element[] | JSX.Element;
}

export type ActionReducerTypeEntries =
  | { type: "[Entries] - Add Entry"; payload: IEntry }
  | { type: "[Entries] - Update Entry"; payload: IEntry };
