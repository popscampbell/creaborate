import { Typography } from "@mui/material"
import useStyles from "./Footer.styles"

export default function Footer() {
  const classes = useStyles()

  const year = new Date().getFullYear()

  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <Typography variant="caption">
          &copy; Michael Campbell {year}
        </Typography>
      </div>
    </footer>
  )
}
