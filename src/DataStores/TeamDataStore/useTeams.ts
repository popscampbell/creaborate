import { DataStore } from "aws-amplify"
import { Team, TeamMemberStatus, UserProfile } from "models"
import { useEffect, useState } from "react"

export default function useTeams(userProfile?: UserProfile) {
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    if (userProfile) {
      const sub = DataStore.observeQuery(Team, (team) =>
        team.TeamMembers.and((teamMember) => [
          teamMember.UserProfile.eq(userProfile.id),
          teamMember.Status.eq(TeamMemberStatus.CONFIRMED),
        ])
      ).subscribe((snapshot) => setTeams(snapshot.items))

      return function cleanup() {
        sub.unsubscribe()
      }
    }
  }, [userProfile])

  return teams
}
