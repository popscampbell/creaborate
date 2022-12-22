import { DataStore } from "aws-amplify"
import { Team } from "models"
import { TeamMemberStatus, TeamMember } from "models"
import { useEffect, useState } from "react"

export default function useTeamInvitations(team: Team) {
  const [invitations, setInvitations] = useState<TeamMember[]>([])

  useEffect(() => {
    const subscription = DataStore.observeQuery(TeamMember, (teamMember) =>
      teamMember.and((teamMember) => [
        teamMember.Team.eq(team.id),
        teamMember.Status.eq(TeamMemberStatus.INVITED),
      ])
    ).subscribe((snapshot) => {
      setInvitations(snapshot.items)
    })

    return function cleanup() {
      subscription && subscription.unsubscribe()
    }
  }, [])

  return invitations
}
