import { TeamType, TeamVisibility } from "models"

export default class TeamUtilities {
  static TeamTypeLabel(teamType: TeamType | string, lowercase?: boolean) {
    const teamTypeLabelMap = {
      [TeamType.BAND]: "Band",
      [TeamType.GROUP]: "Group",
      [TeamType.TEAM]: "Team",
    }

    const label = teamTypeLabelMap[teamType as TeamType]

    return lowercase ? label.toLowerCase() : label
  }

  static TeamVisibilityLabel(teamVisibility: TeamVisibility | string, lowercase?: boolean) {
    const teamVisibilityLabelMap = {
      [TeamVisibility.PRIVATE]: "Private",
      [TeamVisibility.PUBLIC]: "Public",
      [TeamVisibility.ARCHIVED]: "Archived",
    }

    const label = teamVisibilityLabelMap[teamVisibility as TeamVisibility]

    return lowercase ? label.toLowerCase() : label
  }
}
