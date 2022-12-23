import { makeStyles, shorthands } from "Theme"

const useStyles = makeStyles({
  root: {
    display: "flex",
    ...shorthands.margin("auto", 0),
  },
})

export default useStyles
