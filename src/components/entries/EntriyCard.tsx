import { DragEvent, FC, useContext } from "react";
import { UiContext } from "@/context";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { IEntryProps } from "@/interfaces";

export const EntriyCard: FC<IEntryProps> = ({ entry }) => {
  const { onStartDragginEntry, onEndDragginEntry } = useContext(UiContext);
  const onDragStartHandle = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", entry._id);
    onStartDragginEntry();
  };

  const onDragEndHandle = (event: DragEvent<HTMLDivElement>) => {
    onEndDragginEntry();
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      // TODO: eventos drag-drop
      draggable
      onDragStart={onDragStartHandle}
      onDragEnd={onDragEndHandle}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2" sx={{ fontSize: 12 }}>
            <i>hace 30 minutos</i>
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
