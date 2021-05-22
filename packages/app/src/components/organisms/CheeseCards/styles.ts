import { makeStyles, useTheme } from "@material-ui/core/styles";

export const appBarHeight = 58;
export const footerHeight = 48;

const styles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: theme.spacing(2),
    maxWidth: theme.breakpoints.values.lg,
    margin: `${theme.spacing(2)}px auto`,
    padding: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
      margin: `${theme.spacing(2)}px 0`,
      padding: `0 ${theme.spacing(1)}px`,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
}));

const useStyles = () => {
  const theme = useTheme();
  return styles(theme);
};

export default useStyles;
