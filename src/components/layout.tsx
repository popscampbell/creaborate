import { setScreenSize } from "@/state/globalSlice"
import { useAppDispatch } from "@/state/hooks"
import { ScreenSize } from "@/state/types"
import { Authenticator, Flex } from "@aws-amplify/ui-react"
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { useEffect } from "react"
import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"
import AppNavigator from "./AppNavigator"

export default function Layout(props: { children: any }) {
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(
    theme.breakpoints.up("sm") && theme.breakpoints.down("lg")
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    const screenSize: ScreenSize = isPhone
      ? "Phone"
      : isTablet
      ? "Tablet"
      : "Desktop"
    dispatch(setScreenSize(screenSize))
  }, [isPhone, isTablet])

  return (
    <Flex
      direction="column"
      backgroundColor={theme.palette.background.default}
      color={theme.palette.text.primary}
      minHeight="100vh"
      rowGap={1}
    >
      <AppHeader />

      <Flex className="middle" direction="column" grow={1}>
        <Authenticator>
          {({ signOut, user }) => (
            <Flex grow={1}>
              {!isPhone && (
                <Flex
                  as="nav"
                  direction="column"
                  marginBlockEnd={41}
                  boxShadow={theme.shadows[1]}
                  backgroundImage="linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))"
                >
                  <AppNavigator />
                </Flex>
              )}
              <Flex as="main">{props.children}</Flex>
            </Flex>
          )}
        </Authenticator>
      </Flex>

      <AppFooter />
    </Flex>
  )
}
