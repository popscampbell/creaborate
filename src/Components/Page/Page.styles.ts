import theme, { makeStyles, shorthands } from "Theme"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.flex(1, 1, "auto"),
    backgroundColor: theme.palette.secondary.lighter,
  },
  rootCompact: {
    flexDirection: "column",
  },
})

export default useStyles
