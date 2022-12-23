import { makeStyles, shorthands } from "Theme"

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    ...shorthands.flex(1, 1, "auto"),
    display: "flex",
    flexDirection: "column",
  },
})

export default useStyles
