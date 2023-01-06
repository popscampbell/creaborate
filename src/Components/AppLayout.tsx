import { Authenticator, Flex, useTheme } from "@aws-amplify/ui-react"
import { Outlet } from "react-router-dom"
import AppBar from "./AppBar"
import Footer from "./Footer"

export default function AppLayout() {
  const { tokens } = useTheme()

  return (
    <>
      <AppBar />

      <Flex direction="column" grow={1} paddingInline={tokens.space.medium}>
        <Authenticator>{() => <Outlet />}</Authenticator>
      </Flex>

      <Footer />
    </>
  )
}
