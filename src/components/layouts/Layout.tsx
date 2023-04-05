import { ILayoutProps } from "@/interfaces";
import { Box } from "@mui/material";
import Head from "next/head";
import { FC } from "react";
import { Navbar, Sidebar } from "@/components";

export const Layout: FC<ILayoutProps> = ({
  title = "OpenJira App",
  children,
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <main>
        <Box sx={{ padding: "10px 20px" }}>{children}</Box>
      </main>
    </Box>
  );
};
