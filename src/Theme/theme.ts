import { createTheme } from "@mui/material"
import { grey } from "@mui/material/colors"

declare module "@mui/material/styles" {
  interface PaletteColor {
    main: string,
    dark: string,
    darker: string,
    light: string,
    lighter: string,
    contrastText: string,
  }

  interface PaletteColorOptions {
    main?: string,
    dark?: string,
    darker?: string,
    light?: string,
    lighter?: string,
    contrastText?: string,
  }

  interface TypeBackground {
    default: string
    paper: string
    entity: string
    entitySection: string
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    brand: true,
    menu: true,
    menuActive: true,
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    title: true
  }
}

const fontFamily = "'Lato', sans-serif"

const palette = {
  primary: {
    main: "#77BB3F",
    dark: "#53822c",
    light: "#92c865"
  },
  secondary: {
    main: grey[400],
    dark: grey[700],
    darker: grey[900],
    light: grey[300],
    lighter: grey[200],
    contrastText: grey[300],
  },
  background: {
    entity: grey[300],
    entitySection: grey[300],
  },
}

const theme = createTheme({
  typography: {
    fontFamily: fontFamily,
    fontWeightBold: 600,
  },
  palette,
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "overline" },
          style: {
            fontSize: "48px",
            lineHeight: "1.25"
          }
        },
        {
          props: { variant: "caption" },
          style: {
            fontSize: "12px",
            lineHeight: "1.25",
            color: palette.primary.main,
          }
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: "none",
          color: palette.primary.dark,
        }
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            color: palette.primary.dark,
          },
        },
        {
          props: { variant: "brand" },
          style: {
            fontSize: "32px",
          }
        },
        {
          props: { variant: "menu", },
          style: {
            fontSize: "24px",
            color: palette.secondary.main,
            textTransform: "none",
          }
        },
        {
          props: { variant: "menuActive", },
          style: {
            fontSize: "24px",
            color: palette.primary.main,
            textTransform: "none",
          }
        }
      ]
    },
    MuiTextField: {
      variants: [
        {
          props: { size: "title" },
          style: {
            input: {
              color: palette.primary.dark,
              fontSize: "48px",
            },
            fieldset: {
              borderWidth: 0,
            },
          },
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { color: "primary" },
          style: {
            color: palette.primary.dark,
            borderColor: palette.primary.dark,
            "deleteIcon": {
              color: palette.primary.dark,
            },
            deleteIconColorPrimary: palette.primary.dark,
          },
        },
      ],
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderColor: palette.secondary.main
          }
        }
      ]
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: palette.secondary.light
          }
        }
      ]
    }
  },
})

export default theme
