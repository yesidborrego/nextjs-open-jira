import { ChangeEvent, useContext, useState } from "react";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Box, Button, Divider, TextField } from "@mui/material";
import { EntriesContext, UiContext } from "@/context";

export const NewEntry = () => {
  const { onSetIsAddingEntry, isAddingEntry } = useContext(UiContext);
  const { onAddEntry } = useContext(EntriesContext);
  const [inputValue, setInputValue] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const onChangeTextField = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };

  const onSaveNewTask = () => {
    if (inputValue.trim().length === 0) return;
    onAddEntry(inputValue);
    onSetIsAddingEntry(!isAddingEntry);
    setInputValue("");
    setTouched(false);
  };

  return (
    <>
      <Box
        sx={{
          marginBottom: 2,
          paddingX: 2,
        }}
      >
        {isAddingEntry ? (
          <>
            <TextField
              autoFocus
              error={inputValue.length <= 0 && touched}
              fullWidth
              helperText={
                inputValue.length <= 0 && touched && "Writte a new task"
              }
              label="New entry"
              multiline
              onBlur={() => setTouched(true)}
              onChange={(event) => onChangeTextField(event)}
              sx={{
                marginTop: 2,
                marginBottom: 1,
              }}
              value={inputValue}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                onClick={() => onSetIsAddingEntry(!isAddingEntry)}
                size="small"
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                color="secondary"
                disabled={inputValue.length <= 0 && touched}
                endIcon={<SaveOutlinedIcon />}
                size="small"
                onClick={onSaveNewTask}
                variant="outlined"
              >
                Save
              </Button>
            </Box>
          </>
        ) : (
          <Button
            fullWidth
            onClick={() => {
              onSetIsAddingEntry(!isAddingEntry);
              setTouched(false);
            }}
            startIcon={<AddCircleOutlineOutlined />}
            variant="outlined"
          >
            Add new Task
          </Button>
        )}
      </Box>
      <Divider sx={{ width: "95%", margin: "auto" }} />
    </>
  );
};
