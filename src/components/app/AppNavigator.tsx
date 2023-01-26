import { ScreenSize } from "@/state/types"
import { Flex } from "@aws-amplify/ui-react"
import MenuIcon from "@mui/icons-material/Menu"
import { IconButton, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { toggleIsNavigatorCollapsed } from "state/globalSlice"
import { useAppDispatch, useAppSelector } from "state/hooks"
import AppNavigatorLink from "./AppNavigatorLink"

export default function AppNavigator() {
  const { isNavigatorCollapsed, navigatorSections, screenSize } =
    useAppSelector((state) => state.app)

  const { team } = useAppSelector((state) => state.team)

  const dispatch = useAppDispatch()
  const { route } = useRouter()

  const context = route.split("/").filter((r) => r !== "")[0]

  return (
    <Flex
      direction={"column"}
      paddingRight={isNavigatorCollapsed ? undefined : 12}
    >
      {screenSize !== ScreenSize.PHONE && (
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

      {context === "team" && team && (
        <Typography variant="subtitle1">team.name</Typography>
      )}

      {navigatorSections.map((section, key) => (
        <AppNavigatorLink key={key} {...section} />
      ))}
    </Flex>
  )
}
