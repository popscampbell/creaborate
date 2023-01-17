import { useAppSelector } from "src/state/hooks"
import { NavigatorLink } from "src/state/types"
import { Flex } from "@aws-amplify/ui-react"
import { Badge, Typography } from "@mui/material"
import Link from "next/link"

export default function AppNavigatorLink(props: NavigatorLink) {
  const { to, label, icon, ...badgeProps } = props

  const { isNavigatorCollapsed, screenSize } = useAppSelector(
    (state) => state.app
  )

  return (
    <Link href={to}>
      <Flex
        paddingInlineStart={8}
        columnGap={12}
        paddingRight={isNavigatorCollapsed ? undefined : 12}
      >
        <Flex title={label}>{icon}</Flex>
        {!(isNavigatorCollapsed && screenSize !== "Phone") && (
          <Typography>{label}</Typography>
        )}
        {<Badge {...badgeProps} color="primary" />}
      </Flex>
    </Link>
  )
}
