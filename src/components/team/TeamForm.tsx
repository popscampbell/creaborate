import { loadUserTeams } from "@/data/userUtils"
import { Team, TeamVisibility } from "@/models"
import { useAppDispatch, useAppSelector } from "@/state/hooks"
import { clearTeamData, setTeam } from "@/state/teamSlice"
import { DataStore } from "@aws-amplify/datastore"
import { useRouter } from "next/router"
import FormBuilder from "../formBuilder/FormBuilder"
import { teamFields } from "./teamFields"

export default function TeamForm(props: { team: Team }) {
  const { team } = props

  const { username } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const router = useRouter()

  function handleDelete() {
    DataStore.save(
      Team.copyOf(team, (copy) => {
        copy.visibility = TeamVisibility.ARCHIVED
      })
    ).then(() => {
      clearTeamData()
      loadUserTeams(username, dispatch)
      router.push("/user/teams")
    })
  }

  function handleSave(inputValues: Team) {
    DataStore.save(
      Team.copyOf(team, (copy) => {
        copy.searchName = (copy.name = inputValues.name).toLowerCase()
        copy.description = inputValues.description
        copy.teamType = inputValues.teamType
        copy.customTeamType = inputValues.customTeamType
        copy.visibility = inputValues.visibility
      })
    ).then((updatedTeam) => {
      dispatch(setTeam(updatedTeam))
    })
  }

  return (
    <FormBuilder
      item={team}
      fields={teamFields}
      onSave={handleSave}
      onDelete={handleDelete}
    />
  )
}
