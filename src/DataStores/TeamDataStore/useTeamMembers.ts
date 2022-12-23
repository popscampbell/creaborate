import { DataStore } from "aws-amplify"
import { Team, TeamMember, TeamMemberStatus } from "models"
import { useState, useEffect } from "react"

export default function useTeamMembers(team: Team) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    const subscription = DataStore.observeQuery(TeamMember, (teamMember) =>
      teamMember.and((teamMember) => [
        teamMember.Team.eq(team.id),
        teamMember.Status.eq(TeamMemberStatus.CONFIRMED),
      ])
    ).subscribe((snapshot) => {
      setTeamMembers(snapshot.items)
    })

    return function cleanup() {
      subscription && subscription.unsubscribe()
    }
  }, [team.id])

  return teamMembers
}
