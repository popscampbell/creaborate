import { DataStore } from "aws-amplify"
import AsyncGuardStatus from "DataStores/AsyncGuardStatus"
import { TeamMember } from "models"
import { useEffect, useState } from "react"

export default function useTeamAuthStatus(
  userProfileId: string,
  teamId: string
) {
  const [authStatus, setAuthStatus] = useState<AsyncGuardStatus>("C")

  useEffect(() => {
    const subscription = DataStore.observeQuery(TeamMember, (teamMember) =>
      teamMember.and((teamMember) => [
        teamMember.UserProfile.id.eq(userProfileId),
        teamMember.Team.eq(teamId),
      ])
    ).subscribe((snapshot) =>
      setAuthStatus(snapshot.items.length > 0 ? "Y" : "N")
    )

    return function cleanUp() {
      subscription.unsubscribe()
    }
  }, [teamId, userProfileId])

  return authStatus
}
