import { createMuiTheme } from "@material-ui/core/styles";

const primaryMain = "#6366f1";
const secondaryMain = "#22d3ee";
const backgroundDefault = "#0f172a";
const backgroundPaper = "#121c36";
const textPrimary = "#e2e8f0";
const textSecondary = "#94a3b8";

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
    background: {
      default: backgroundDefault,
      paper: backgroundPaper,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.015em",
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
    body1: {
      lineHeight: 1.6,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 999,
        paddingInline: "1.5rem",
        paddingBlock: "0.65rem",
      },
      containedPrimary: {
        boxShadow: "0 12px 24px rgba(99, 102, 241, 0.35)",
        '&:hover': {
          boxShadow: "0 16px 32px rgba(99, 102, 241, 0.45)",
        },
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "transparent",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.15)",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 20,
      },
    },
  },
});
