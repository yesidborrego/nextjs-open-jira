import { FC, useContext } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UiContext } from "@/context";

export const Navbar: FC = () => {
  const { openSidebarMenu } = useContext(UiContext);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSidebarMenu}>
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
