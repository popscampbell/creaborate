import { Task, TeamMember } from "@src/models"

export type ContextArea = "Home" | "User" | "Team"
export type TeamMemberWithName = TeamMember & { name: string }
export type TeamWithUserRole = Team & { role: TeamMemberRole }
