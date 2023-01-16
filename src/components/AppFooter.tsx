import { Flex } from "@aws-amplify/ui-react"
import { AppBar, Toolbar } from "@mui/material"
import Copyright from "./Copyright"

export default function AppFooter() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Flex grow={1} justifyContent="end">
          <Copyright variant="footer" />
        </Flex>
      </Toolbar>
    </AppBar>
  )
}
