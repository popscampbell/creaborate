import { AppBar, Toolbar, Typography, useTheme } from "@mui/material"

export default function AppHeader() {
  const theme = useTheme()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4">Creaborate</Typography>
      </Toolbar>
    </AppBar>
  )
}
