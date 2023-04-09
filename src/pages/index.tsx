import { EntryList, Layout, NewEntry } from "@/components";
import { Card, CardHeader, Grid } from "@mui/material";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={12} sm={4} lg={3}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="To do" />
            <NewEntry />
            <EntryList status="pending" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} lg={3}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In Progress" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} lg={3}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Done" />
            <EntryList status="done" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
