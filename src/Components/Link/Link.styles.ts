import { makeStyles, tokens } from "Theme"

const useStyles = makeStyles({
  root: {
    textDecorationLine: "none",
  },
  inverted: {
    color: tokens.colorForegroundInverted,
  },
  active: {
    fontWeight: tokens.fontWeightSemibold,
  },
})

export default useStyles
