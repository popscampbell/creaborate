import theme, { makeStyles, shorthands } from "Theme"

const useStyles = makeStyles({
  root: {
    ...shorthands.margin(theme.spacing(1), 0)
  }
})

export default useStyles