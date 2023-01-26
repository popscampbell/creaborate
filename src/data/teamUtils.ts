import { Team, TeamMember, TeamProject, TeamProjectComment } from "@/models"
import { AppDispatch } from "@/state/store"
import { clearTeamData, setTeamMembers } from "@/state/teamSlice"
import { DataStore } from "aws-amplify"
import router from "next/router"
import { getTeamMemberWithName } from "./userUtils"

export async function deleteTeam(teamID: string) {
  DataStore.query(Team, teamID).then((record) => {
    if (record) {
      DataStore.query(TeamProject, record => record.teamID.eq(teamID)).then(async projects => {
        await Promise.all(projects.map(project =>
          DataStore.delete(TeamProjectComment, record => record.teamprojectID.eq(project.id))
        ))
      })
      DataStore.delete(record).then(() => {
        clearTeamData()
        router.push("/user/teams")
      })
    }
  })
}

export async function getTeamMembers(teamID: string, dispatch: AppDispatch) {
  DataStore.query(TeamMember, (member) => member.teamID.eq(teamID))
    .then(
      async (members) => {
        return await Promise.all(
          members.map((member) => getTeamMemberWithName(member))
        )
      }
    )
    .then((teamMembers) => {
      dispatch(setTeamMembers(teamMembers))
      return teamMembers
    })

}