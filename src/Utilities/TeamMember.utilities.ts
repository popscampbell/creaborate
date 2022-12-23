import { TeamMemberRole, TeamMemberStatus } from "models"

export default class TeamMemberUtilities {
  static TeamMemberStatusLabel(teamMemberStatus: TeamMemberStatus | string, lowercase?: boolean) {
    const teamMemberStatusLabelMap = {
      [TeamMemberStatus.INVITED]: "Invited",
      [TeamMemberStatus.CONFIRMED]: "Confirmed",
      [TeamMemberStatus.DECLINED]: "Declined",
      [TeamMemberStatus.DEPARTED]: "Departed",
    }

    const label = teamMemberStatusLabelMap[teamMemberStatus as TeamMemberStatus]

    return lowercase ? label.toLocaleLowerCase() : label
  }

  static TeamMemberRoleLabel(teamMemberRole: TeamMemberRole | string, lowercase?: boolean) {
    const teamMemberRoleLabelMap = {
      [TeamMemberRole.ADMINISTRATOR]: "Administrator",
      [TeamMemberRole.MEMBER]: "Member",
    }

    const label = teamMemberRoleLabelMap[teamMemberRole as TeamMemberRole]

    return lowercase ? label.toLocaleLowerCase() : label
  }
}
