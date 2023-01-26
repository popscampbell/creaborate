import { setScreenSize } from "state/globalSlice"
import { useAppDispatch } from "state/hooks"
import { ScreenSize } from "state/types"
import { Authenticator, Flex } from "@aws-amplify/ui-react"
import { useMediaQuery, useTheme } from "@mui/material"
import { useEffect } from "react"
import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"
import AppNavigator from "./AppNavigator"

export default function Chrome(props: { children: any }) {
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(
    theme.breakpoints.up("sm") && theme.breakpoints.down("lg")
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    const screenSize: ScreenSize = isPhone
      ? ScreenSize.PHONE
      : isTablet
      ? ScreenSize.TABLET
      : ScreenSize.DESKTOP
    dispatch(setScreenSize(screenSize))
  }, [isPhone, isTablet])

  return (
    <Flex
      direction="column"
      backgroundColor={theme.palette.background.default}
      color={theme.palette.text.primary}
      minHeight="100vh"
      gap={1}
    >
      <AppHeader />

      <Flex className="middle" direction="column" grow={1}>
        <Authenticator>
          {({ signOut, user }) => (
            <Flex grow={1} gap={0} marginBottom={41}>
              {!isPhone && (
                <Flex
                  as="nav"
                  direction="column"
                  boxShadow={theme.shadows[1]}
                  backgroundImage="linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))"
                >
                  <AppNavigator />
                </Flex>
              )}
              <Flex grow={1} as="main">
                {props.children}
              </Flex>
            </Flex>
          )}
        </Authenticator>
      </Flex>

      <AppFooter />
    </Flex>
  )
}
