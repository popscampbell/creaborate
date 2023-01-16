import { toggleIsNavigatorCollapsed } from "@/state/globalSlice"
import { useAppDispatch, useAppSelector } from "@/state/hooks"
import { Flex } from "@aws-amplify/ui-react"
import MenuIcon from "@mui/icons-material/Menu"
import { IconButton } from "@mui/material"
import AppNavigatorLink from "./AppNavigatorLink"

export default function AppNavigator() {
  const { isNavigatorCollapsed, navigatorSections, screenSize } =
    useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()

  return (
    <Flex
      direction={"column"}
      paddingRight={isNavigatorCollapsed ? undefined : 12}
    >
      {screenSize !== "Phone" && (
        <Flex>
          <IconButton
            title={
              isNavigatorCollapsed ? "Expand navigation" : "Collapse navigation"
            }
            onClick={() => dispatch(toggleIsNavigatorCollapsed())}
          >
            <MenuIcon />
          </IconButton>
        </Flex>
      )}

      {navigatorSections.map((section, key) => (
        <AppNavigatorLink {...section} />
      ))}
    </Flex>
  )
}
