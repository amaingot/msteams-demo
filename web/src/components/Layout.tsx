import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Copyright from "../components/Copyright";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
    cursor: "pointer",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  fullScreenContainer: {
    height: "calc(100vh - 100px)",
    width: "100vw",
  },
  logo: {
    maxHeight: theme.spacing(6),
    marginRight: theme.spacing(2),
  },
  navButton: {
    leftMargin: theme.spacing(4),
  },
}));

interface Props {
  title?: string;
  fullScreen?: boolean;
}

const Layout: React.FC<Props> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { title = "", fullScreen = false } = props;

  const pageTitle = `Microsoft Teams Demo ${title && `| ${title}`}`;

  React.useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img src="/logo512.png" alt="React Logo" className={classes.logo} />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
            onClick={() => history.push("/")}
          >
            {pageTitle}
          </Typography>
          <nav>
            <Button
              className={classes.navButton}
              color="inherit"
              onClick={() => history.push("/")}
            >
              Home
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
      <main
        className={fullScreen ? classes.fullScreenContainer : classes.layout}
      >
        {props.children}
        <Copyright />
      </main>
    </React.Fragment>
  );
};

export default Layout;
