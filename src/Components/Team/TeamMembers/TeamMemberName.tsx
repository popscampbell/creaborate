import { TeamMember } from "models"

export default function TeamMemberName(props: {
  teamMember: TeamMember
  short?: boolean
}) {
  const { teamMember, short } = props

  const name = "Hi"

  return <>{name || ""}</>
}
