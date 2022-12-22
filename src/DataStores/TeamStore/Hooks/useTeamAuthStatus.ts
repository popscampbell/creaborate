import { DataStore } from "aws-amplify"
import { TeamMember } from "models"
import { useEffect, useState } from "react"

export function useTeamAuthStatus(userProfileId: string, teamId: string) {
  const [authStatus, setAuthStatus] = useState<"C" | "Y" | "N">("C")

  useEffect(() => {
    const subscription = DataStore.observeQuery(TeamMember, (teamMember) =>
      teamMember.and((teamMember) => [
        teamMember.UserProfile.eq(userProfileId),
        teamMember.Team.eq(teamId),
      ])
    ).subscribe((snapshot) => {
      console.log("snapshot:", snapshot)
      setAuthStatus(snapshot.items.length > 0 ? "Y" : "N")
    })

    return function cleanUp() {
      subscription.unsubscribe()
    }
  }, [])

  console.log("authStatus:", authStatus, ", teamId:", teamId)
  return authStatus
}
