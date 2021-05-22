import { makeStyles, useTheme } from "@material-ui/core/styles";

export const appBarHeight = 58;
export const footerHeight = 48;

const styles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
}));

const useStyles = () => {
  const theme = useTheme();
  return styles(theme);
};

export default useStyles;
