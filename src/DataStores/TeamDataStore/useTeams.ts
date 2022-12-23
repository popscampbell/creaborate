import { useAuthenticator } from "@aws-amplify/ui-react"
import { DataStore, Predicates } from "aws-amplify"
import { Team, TeamMemberStatus } from "models"
import { useEffect, useState } from "react"

export default function useTeams(all: boolean = false) {
  const [teams, setTeams] = useState<Team[]>()

  const { user } = useAuthenticator()

  useEffect(() => {
    const userId = user.username

    if (userId) {
      const subscription = all
        ? DataStore.observeQuery(Team, Predicates.ALL).subscribe((snapshot) =>
            setTeams(snapshot.items)
          )
        : DataStore.observeQuery(Team, (team) =>
            team.TeamMembers.and((teamMember) => [
              teamMember.UserProfile.eq(userId),
              teamMember.Status.eq(TeamMemberStatus.CONFIRMED),
            ])
          ).subscribe((snapshot) => setTeams(snapshot.items))

      return function cleanup() {
        subscription && subscription.unsubscribe()
      }
    }
  }, [all, user.username])

  return teams
}
