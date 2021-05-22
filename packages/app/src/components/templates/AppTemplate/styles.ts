import { makeStyles, useTheme } from "@material-ui/core/styles";

export const appBarHeight = 58;
export const footerHeight = 48;

const styles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplate: '"nav appbar" "nav main"',
    gridTemplateColumns: "min-content 1fr",
    gridTemplateRows: `${appBarHeight}px 1fr`,
    gridGap: 0,
  },
  appBar: {
    gridArea: "appbar",
    height: appBarHeight,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed,
    display: "flex",
    justifyContent: "space-between",
    minHeight: appBarHeight,
  },
  main: {
    gridArea: "main",
    flexGrow: 1,
    height: `calc(100vh - ${appBarHeight}px)`,
    overflow: "auto",
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

const useStyles = () => {
  const theme = useTheme();
  return styles(theme);
};

export default useStyles;
