import { DataStore } from "aws-amplify"
import { TeamMember, UserProfile } from "models"
import { useEffect, useState } from "react"

export default function TeamMemberName(props: {
  teamMemberId: string
  short?: boolean
}) {
  const { teamMemberId, short } = props

  const [name, setName] = useState("")

  useEffect(() => {
    DataStore.query(TeamMember, teamMemberId).then(
      (teamMember) =>
        teamMember &&
        DataStore.query(UserProfile, teamMember.teamMemberUserProfileId)
          .then((profile) => profile?.Name)
          .then((name) => name && (short ? name.split(" ")[0] : name))
          .then((name) => name && setName(name))
    )
  }, [teamMemberId, short])

  return <>{name || ""}</>
}
