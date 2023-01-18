import { Team, TeamProject, TeamProjectComment } from "@/models"
import { clearTeamData } from "@/state/teamSlice"
import { DataStore } from "aws-amplify"
import router from "next/router"

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