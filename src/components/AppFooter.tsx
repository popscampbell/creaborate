import { Flex } from "@aws-amplify/ui-react"
import { AppBar, Toolbar } from "@mui/material"
import Copyright from "./Copyright"

export default function AppFooter() {
  return (
    <AppBar
      role="contentinfo"
      position="fixed"
      sx={{ top: "auto", bottom: 0, height: 40, padding: 0 }}
    >
      <Flex grow={1} justifyContent="end" padding={12}>
        <Copyright variant="footer" />
      </Flex>
    </AppBar>
  )
}
