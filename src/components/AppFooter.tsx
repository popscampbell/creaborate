import { AppBar, Toolbar, Typography } from "@mui/material"

export default function AppFooter() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Typography>Creaborate</Typography>
      </Toolbar>
    </AppBar>
  )
}
