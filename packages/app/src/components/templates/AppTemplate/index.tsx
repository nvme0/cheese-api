import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import useStyles from "./styles";

export interface Props {
  children: JSX.Element;
}

const HomeTemplate = (props: Props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.appBar} color="primary" elevation={0}>
        <Toolbar className={classes.toolbar}></Toolbar>
      </AppBar>
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default HomeTemplate;
