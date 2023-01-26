import { useAppSelector } from "state/hooks"
import { ScreenSize } from "state/types"
import { Flex } from "@aws-amplify/ui-react"
import { Badge, Typography } from "@mui/material"
import Link from "next/link"
import { AppNavigatorLinkProps } from "./types"

export default function AppNavigatorLink(props: AppNavigatorLinkProps) {
  const { to, label, icon, disabled, ...badgeProps } = props

  const { isNavigatorCollapsed, screenSize } = useAppSelector(
    (state) => state.app
  )

  return disabled ? (
    <></>
  ) : (
    <Link href={to}>
      <Flex
        paddingInlineStart={8}
        columnGap={12}
        paddingRight={isNavigatorCollapsed ? undefined : 12}
      >
        <Flex title={label}>{icon}</Flex>
        {!(isNavigatorCollapsed && screenSize !== ScreenSize.PHONE) && (
          <Typography>{label}</Typography>
        )}
        {<Badge {...badgeProps} color="primary" />}
      </Flex>
    </Link>
  )
}
