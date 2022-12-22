import theme, { makeStyles, shorthands, tokens } from "Theme"

const useStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.secondary.darker,
    ...shorthands.padding(
      theme.spacing(6),
      theme.spacing(1.5)
    ),
  },
  container: {
    display: "flex",
    ...shorthands.containerWidth(),
  },
  logo: {
    height: "50px",
    width: "50px",
    ...shorthands.margin(0, theme.spacing(2), 0, 0)
  },
  siteName: {
    color: theme.palette.primary.main,
    fontSize: tokens.fontSizeSiteName,
    textTransform: "uppercase",
    ...shorthands.margin("auto", theme.spacing(2), "auto", 0),
  },
  menu: {
    fontSize: tokens.fontSizeRegular,
    display: "flex",
    justifyContent: "end",
    ...shorthands.flex(1, 1, "auto"),
  },
})

export default useStyles
