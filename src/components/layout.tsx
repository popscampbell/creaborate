import { Authenticator, Flex } from "@aws-amplify/ui-react"
import { useTheme } from "@mui/material"
import React from "react"
import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"

export default function Layout(props: { children: any }) {
  const theme = useTheme()

  return (
    <Flex
      direction="column"
      backgroundColor={theme.palette.background.default}
      color={theme.palette.text.primary}
      minHeight="100vh"
    >
      <AppHeader />

      <Flex direction="column" grow={1} paddingInline={theme.spacing(2)}>
        <Authenticator>
          {({ signOut, user }) => <>{props.children}</>}
        </Authenticator>
      </Flex>

      <AppFooter />
    </Flex>
  )
}
