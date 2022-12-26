import { DataStore } from "aws-amplify"
import { TeamMember } from "models"
import { useEffect, useState } from "react"

export default function useTeamMember(id: string) {
  const [teamMember, setTeamMember] = useState<TeamMember>()

  useEffect(() => {
    const subscription = DataStore.observe(TeamMember, id).subscribe(
      (message) => {
        setTeamMember(message.element)
      }
    )

    return function cleanup() {
      subscription && subscription.unsubscribe()
    }
  }, [id])

  return teamMember
}
