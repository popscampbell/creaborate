import { DataStore } from "aws-amplify"
import { Team, TeamMemberStatus, UserProfile } from "models"
import { useEffect, useState } from "react"

export default function useTeamsByUserProfile(userProfile: UserProfile) {
  const [teams, setTeams] = useState<Team[]>()

  useEffect(() => {
    const subscription = DataStore.observeQuery(Team, (team) =>
      team.TeamMembers.and((teamMember) => [
        teamMember.UserProfile.id.eq(userProfile.id),
        teamMember.Status.eq(TeamMemberStatus.CONFIRMED),
      ])
    ).subscribe((snapshot) => setTeams(snapshot.items))

    return function cleanup() {
      subscription && subscription.unsubscribe()
    }
  }, [userProfile])

  return teams
}
