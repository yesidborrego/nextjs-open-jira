import { DragEvent, FC, useContext, useMemo } from "react";
import { EntriesContext, UiContext } from "@/context";
import { List, Paper } from "@mui/material";
import { EntriyCard } from "./EntriyCard";
import { IEntryStatusProp } from "@/interfaces";
import style from "@/styles/entry.module.css";

export const EntryList: FC<IEntryStatusProp> = ({ status }) => {
  const { entries, onUpdateEntry } = useContext(EntriesContext);
  const { isDragging, onEndDragginEntry } = useContext(UiContext);
  const entrieFilterByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  const onDragEntryHandle = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;
    onUpdateEntry(entry);
    onEndDragginEntry();
  };

  const allowDropHandle = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <div
      onDrop={onDragEntryHandle}
      onDragOver={allowDropHandle}
      className={isDragging ? style.dragging : ""}
    >
      <Paper
        sx={{
          backgroundColor: "transparent",
          height: "calc(100vh - 220px)",
          overflowY: "auto",
          padding: "3px 10px",
        }}
      >
        {/* TODO: cambiará dependiendo si está haciendo drag o no */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entrieFilterByStatus.map((entry) => (
            <EntriyCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
