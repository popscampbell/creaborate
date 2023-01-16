import { AppBar, Toolbar, useTheme } from "@mui/material"
import Creaborate from "./Creaborate"

export default function AppHeader() {
  const theme = useTheme()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Creaborate variant="header" />
      </Toolbar>
    </AppBar>
  )
}
