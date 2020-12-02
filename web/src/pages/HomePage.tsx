import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Layout from "../components/Layout";

const useStyles = makeStyles({
  gridContainer: {
    marginTop: 16,
  },
});

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12}>
          Uh okay
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Over Time" />
            <CardContent>Boom</CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="By Issue Reported" />
            <CardContent>nah bro.</CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="By Issue Reported" />
            <CardContent>Wut r u talkin bout?</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
