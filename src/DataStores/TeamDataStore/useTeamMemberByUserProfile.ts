import { DataStore } from "aws-amplify"
import { TeamMember } from "models"
import { useEffect, useState } from "react"

export default function useTeamMemberByUserProfile(userProfileId: string) {
  const [teamMember, setTeamMember] = useState<TeamMember>()

  useEffect(() => {
    const subscription = DataStore.observe(TeamMember, (member) =>
      member.teamMemberUserProfileId.eq(userProfileId)
    ).subscribe((message) => {
      setTeamMember(message.element)
    })

    return function cleanup() {
      subscription && subscription.unsubscribe()
    }
  }, [userProfileId])

  return teamMember
}
