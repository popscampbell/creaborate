// import theme, { makeStyles, shorthands, tokens } from "Theme"

import { shorthands } from "@griffel/react"
import { makeStyles } from "@mui/material/styles"

makeStyles({
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
