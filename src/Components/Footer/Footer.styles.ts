import theme, { makeStyles, shorthands, tokens } from "Theme"

const useStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.secondary.darker,
    fontSize: tokens.fontSizeSmall,
    ...shorthands.padding(tokens.spacingVerticalFooter, 0),
    textAlign: "end",
  },
  container: {
    ...shorthands.containerWidth(),
  },
})

export default useStyles
