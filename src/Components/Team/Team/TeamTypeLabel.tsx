import { TeamType } from "models"
import { TeamUtilities } from "Utilities"

export default function TeamTypeLabel(props: {
  teamType: TeamType | string
  lowercase?: boolean
}) {
  const { teamType, lowercase } = props
  const label = TeamUtilities.TeamTypeLabel(teamType, lowercase)

  return <>{label}</>
}
