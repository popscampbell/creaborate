import { loadUserTeams } from "@/data/userUtils"
import { Team, TeamType, TeamVisibility } from "@/models"
import { useAppDispatch, useAppSelector } from "@/state/hooks"
import { clearTeamData, setTeam } from "@/state/teamSlice"
import { DataStore } from "@aws-amplify/datastore"
import { useRouter } from "next/router"
import React from "react"
import CreaborateForm from "../forms/CreaborateForm"
import CreaborateRadioField from "../forms/CreaborateRadioField"
import CreaborateSwitchField from "../forms/CreaborateSwitchField"
import CreaborateTextField from "../forms/CreaborateTextField"

export default function TeamForm(props: { team: Team }) {
  const { team } = props

  const { username } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [hideCustomTeamType, setHideCustomTeamType] = React.useState(
    team.teamType !== TeamType.CUSTOM
  )

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
    <CreaborateForm
      source={{
        name: team.name,
        description: team.description,
        customTeamType: team.customTeamType,
        teamType: team.teamType,
        visibility: team.visibility
      }}
      onSuccess={handleSave}
      onDelete={handleDelete}
    >
      <CreaborateSwitchField name="visibility" label="Public" />
      <CreaborateTextField name="name" label="Name" />
      <CreaborateTextField name="description" label="Description" multiline />
      <CreaborateRadioField
        name="teamType"
        label="Type"
        options={[
          { id: TeamType.BAND, label: "Band" },
          { id: TeamType.GROUP, label: "Group" },
          { id: TeamType.TEAM, label: "Team" },
          { id: TeamType.CUSTOM, label: "Custom" }
        ]}
        readonlyValue={team.teamType}
        onChange={(value) => setHideCustomTeamType(value !== TeamType.CUSTOM)}
      />
      <CreaborateTextField
        name="customTeamType"
        label="Custom type"
        hidden={hideCustomTeamType}
      />
    </CreaborateForm>
  )
}
