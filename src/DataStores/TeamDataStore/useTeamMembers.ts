import { DataStore } from "aws-amplify"
import { Team, TeamMember } from "models"
import { useEffect, useState } from "react"

export default function useTeamMembers(team: Team) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    const sub = DataStore.observeQuery(TeamMember, (teamMember) =>
      teamMember.Team.eq(team.id))
      .subscribe(snapshot => setTeamMembers(snapshot.items))

    return () => sub.unsubscribe()
  }, [team])

  return teamMembers
}