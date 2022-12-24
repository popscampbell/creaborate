import { DataStore, Predicates } from "aws-amplify"
import { Team, TeamMember, UserProfile } from "models"

export function clearData() {
  return DataStore.delete(TeamMember, Predicates.ALL).then(() =>
    DataStore.delete(Team, Predicates.ALL).then(() =>
      DataStore.delete(UserProfile, Predicates.ALL)
    )
  )
}
