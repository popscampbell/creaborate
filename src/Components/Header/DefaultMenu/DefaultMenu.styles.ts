import { makeStyles, tokens, shorthands } from "Theme"

const useStyles = makeStyles({
  root: {
    display: "flex",
    ...shorthands.margin("auto", 0),
  },
  link: {
    fontSize: tokens.fontSizeLarge,
    textDecorationLine: "none",
    ...shorthands.margin(0, tokens.spacingHorizontalXL),
  },
})

export default useStyles
