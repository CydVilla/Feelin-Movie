import { createMuiTheme } from "@material-ui/core/styles";
const arcBlue = "#ff0000";
const arcOrange = "#FFBA60";
export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
});
