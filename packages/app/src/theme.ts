import { Theme, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f4d75e",
    },
    secondary: {
      main: "#e9723d",
    },
    type: "light",
  },
});

export default {
  ...theme,
  overrides: {
    MuiDialogActions: {
      root: {
        padding: theme.spacing(2, 3),
      },
    },
    MuiCardHeader: {
      action: {
        marginTop: 0,
        marginRight: 0,
      },
    },
  },
} as Theme;
