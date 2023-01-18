import { Team, TeamMemberRole } from "models"
import { BadgeProps } from "@mui/material"
import { TeamMember } from "models"

export enum ScreenSize {
  PHONE = "phone",
  TABLET = "tablet",
  DESKTOP = "desktop",
}

export enum AuthenticationStatus {
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated",
  CONFIGURING = "configuring",
}

export type TeamMemberWithName = TeamMember & { name: string }

export type TeamWithUserRole = Team & { role: TeamMemberRole }

export type NavigatorLink = {
  to: string
  label: string
  icon: JSX.Element
} & BadgeProps