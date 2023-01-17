import FormBuilder from "@/components/formBuilder/FormBuilder"
import { Team, TeamType, TeamVisibility } from "@/models"
import { useAppDispatch, useAppSelector } from "@/state/hooks"
import { setTeam } from "@/state/teamSlice"
import { DataStore } from "aws-amplify"
import Layout from "@/components/app/Layout"
import TeamPage from "@/components/team/TeamPage"

export default function TeamSettingsPage() {
  const { team } = useAppSelector((state) => state.team)
  const dispatch = useAppDispatch()

  function handleDelete() {
    alert("delete")
  }

  function handleSave(inputValues: Team) {
    if (team) {
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
  }

  return (
    <Layout>
      <TeamPage title="Settings">
        {team && (
          <FormBuilder
            item={team}
            fields={[
              {
                label: "Public",
                name: "visibility",
                type: "toggle",
                toggleOnValue: TeamVisibility.PUBLIC,
                toggleOffValue: TeamVisibility.PRIVATE
              },
              { label: "Name", name: "name", type: "text", required: true },
              {
                label: "Description",
                name: "description",
                type: "longText",
                required: true
              },
              {
                label: "Team type",
                name: "teamType",
                type: "choice",
                options: [
                  { label: "Band", value: TeamType.BAND },
                  { label: "Group", value: TeamType.GROUP },
                  { label: "Team", value: TeamType.TEAM },
                  { label: "Custom", value: TeamType.CUSTOM }
                ]
              },
              {
                label: "Custom team type",
                name: "customTeamType",
                type: "text"
              }
            ]}
            onSave={handleSave}
            onDelete={handleDelete}
          />
        )}
      </TeamPage>
    </Layout>
  )
}
