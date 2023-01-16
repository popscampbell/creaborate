import { Authenticator, Flex } from "@aws-amplify/ui-react"
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"

export default function Layout(props: { children: any }) {
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Flex
      direction="column"
      backgroundColor={theme.palette.background.default}
      color={theme.palette.text.primary}
      minHeight="100vh"
      rowGap={0}
    >
      <AppHeader />

      <Flex direction="column" grow={1}>
        <Authenticator>
          {({ signOut, user }) => (
            <Flex grow={1}>
              {!isPhone && (
                <Flex
                  direction="column"
                  backgroundColor={theme.palette.primary.dark}
                  color={theme.palette.grey[100]}
                  minWidth={200}
                  paddingInline={12}
                  paddingBlock={12}
                >
                  <Flex grow={1}>
                    <Typography>Menu</Typography>
                  </Flex>
                </Flex>
              )}
              <Flex>{props.children}</Flex>
            </Flex>
          )}
        </Authenticator>
      </Flex>

      <AppFooter />
    </Flex>
  )
}
