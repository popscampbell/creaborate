import {
  TaskPriority,
  TaskStatus,
  TeamMemberRole,
  TeamMemberStatus,
  TeamType,
  TeamVisibility,
  UserProfileVisibility,
} from "models"

// Task enums
const taskPriorityLabels = {
  [TaskPriority.HIGH]: "High",
  [TaskPriority.MEDIUM]: "Medium",
  [TaskPriority.LOW]: "Low",
}

const taskStatusLabels = {
  [TaskStatus.ACTIVE]: "Active",
  [TaskStatus.ARCHIVED]: "Archived",
  [TaskStatus.CLOSED]: "Closed",
}

export { taskPriorityLabels, taskStatusLabels }

// Team enums
const teamTypeLabels = {
  [TeamType.BAND]: "Band",
  [TeamType.GROUP]: "Group",
  [TeamType.TEAM]: "Team",
}

const teamVisibilityLabels = {
  [TeamVisibility.PRIVATE]: "Private",
  [TeamVisibility.PUBLIC]: "Public",
  [TeamVisibility.ARCHIVED]: "Archived",
}

export { teamTypeLabels, teamVisibilityLabels }

// Team member enums
const teamMemberRoleLabels = {
  [TeamMemberRole.ADMINISTRATOR]: "Administrator",
  [TeamMemberRole.MEMBER]: "Member",
}

const teamMemberStatusLabels = {
  [TeamMemberStatus.INVITED]: "Invited",
  [TeamMemberStatus.CONFIRMED]: "Confirmed",
  [TeamMemberStatus.DECLINED]: "Declined",
  [TeamMemberStatus.DEPARTED]: "Departed",
}

export { teamMemberRoleLabels, teamMemberStatusLabels }

// User profile enums
const userProfileVisibilityLabels = {
  [UserProfileVisibility.PRIVATE]: "Private",
  [UserProfileVisibility.PUBLIC]: "Public",
  [UserProfileVisibility.ARCHIVED]: "Archived",
}

export { userProfileVisibilityLabels }
