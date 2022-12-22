import theme, { makeStyles, shorthands, tokens } from "Theme"

const useStyles = makeStyles({
  root: {
    ...shorthands.padding(tokens.spacingVerticalSection, 0),
  },
  backgroundLight: { backgroundColor: theme.palette.secondary.light },
  backgroundLighter: { backgroundColor: theme.palette.secondary.lighter },
  backgroundMain: { backgroundColor: theme.palette.secondary.main },
  backgroundDark: { backgroundColor: theme.palette.secondary.dark },
  backgroundDarker: { backgroundColor: theme.palette.secondary.darker, color: theme.palette.primary.lighter },
  content: {
    ...shorthands.containerWidth(),
  },
  fill: {
    ...shorthands.flex(1, 1, "auto"),
  },
})

export default useStyles
