import { DataStore } from "aws-amplify"
import { Team } from "models"
import { useEffect, useState } from "react"

export default function useTeam(teamId: string) {
  const [team, setTeam] = useState<Team>()

  useEffect(() => {
    const subscription = DataStore.observeQuery(Team, (t) =>
      t.id.eq(teamId)
    ).subscribe((snapshot) => {
      setTeam((snapshot.items && snapshot.items[0]) || undefined)
    })

    return function cleanUp() {
      subscription.unsubscribe()
    }
  }, [])

  return team
}
