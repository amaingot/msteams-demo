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
          One day there will be content!
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
