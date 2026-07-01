import { createTheme } from "@material-ui/core/styles";

// Letterboxd-inspired charcoal palette with the signature tri-colour accents
// (green / blue / orange), kept distinct with a teal-leaning green so the app
// retains its own identity rather than being a pixel copy.
const lbGreen = "#00e054";
const lbBlue = "#40bcf4";
const lbOrange = "#ff8000";

const backgroundDefault = "#14181c";
const backgroundPaper = "#1c252c";
const surfaceRaised = "#2c3440";
const textPrimary = "#f4f6f8";
const textSecondary = "#9ab";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: lbGreen,
      contrastText: "#0b0f12",
    },
    secondary: {
      main: lbBlue,
      contrastText: "#0b0f12",
    },
    background: {
      default: backgroundDefault,
      paper: backgroundPaper,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
    divider: "rgba(120, 140, 160, 0.16)",
  },
  typography: {
    fontFamily: "'Inter', 'Graphik', 'Helvetica Neue', 'Arial', sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.015em",
    },
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
    },
    body1: {
      lineHeight: 1.65,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 6,
        paddingInline: "1.35rem",
        paddingBlock: "0.55rem",
      },
      containedPrimary: {
        color: "#0b0f12",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#1fe968",
          boxShadow: "0 8px 20px rgba(0, 224, 84, 0.28)",
        },
      },
      outlinedSecondary: {
        borderColor: "rgba(64, 188, 244, 0.5)",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: surfaceRaised,
        color: textPrimary,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 10,
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: "rgba(20, 24, 28, 0.6)",
        "& $notchedOutline": {
          borderColor: "rgba(120, 140, 160, 0.28)",
        },
        "&:hover $notchedOutline": {
          borderColor: "rgba(64, 188, 244, 0.6)",
        },
      },
    },
  },
});

// Expose the tri-colour accents for components that want the signature motif.
theme.accents = { green: lbGreen, blue: lbBlue, orange: lbOrange, surfaceRaised };

export default theme;
