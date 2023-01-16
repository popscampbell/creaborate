import { BadgeProps } from "@mui/material"
import { Task, TeamMember } from "@src/models"

export type ContextArea = "Home" | "User" | "Team"
export type TeamMemberWithName = TeamMember & { name: string }
export type TeamWithUserRole = Team & { role: TeamMemberRole }
export type ScreenSize = "Phone" | "Tablet" | "Desktop"
export type AuthenticationStatus = "authenticated" | "unauthenticated" | "configuring"

export type NavigatorLink = {
  to: string
  label: string
  icon: JSX.Element
} & BadgeProps