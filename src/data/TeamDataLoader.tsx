import { Auth, DataStore } from "aws-amplify"
import {
  Task,
  Team,
  TeamContact,
  TeamEvent,
  TeamImage,
  TeamInvitation,
  TeamProject
} from "models"
import React from "react"
import { useAppDispatch } from "state/hooks"
import {
  setTeam,
  setTeamContacts,
  setTeamEvents,
  setTeamImages,
  setTeamInvitations,
  setTeamProjects,
  setTeamTasks,
  setUserRole
} from "state/teamSlice"
import { getTeamMembers } from "./teamUtils"
import { getTeamWithUserRole } from "./userUtils"

export function TeamDataLoader(props: { children: any; teamID: string }) {
  const { children, teamID } = props

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    Auth.currentAuthenticatedUser().then((currentUser) => {
      DataStore.query(Team, teamID)
        .then(async (team) => {
          if (team) {
            const role = await getTeamWithUserRole(
              currentUser.username,
              team
            ).then((twur) => twur?.role)
            dispatch(setTeam(team))
            dispatch(setUserRole(role))
            return team
          }
        })
        .then(() => getTeamMembers(teamID, dispatch))

      DataStore.query(Task, (item) => item.teamID.eq(teamID)).then((items) => {
        dispatch(setTeamTasks(items))
      })

      DataStore.query(TeamProject, (item) => item.teamID.eq(teamID)).then(
        (items) => dispatch(setTeamProjects(items))
      )

      DataStore.query(TeamImage, (item) => item.teamID.eq(teamID)).then(
        (items) => dispatch(setTeamImages(items))
      )

      DataStore.query(TeamContact, (item) => item.teamID.eq(teamID)).then(
        (items) => dispatch(setTeamContacts(items))
      )

      DataStore.query(TeamEvent, (item) => item.teamID.eq(teamID)).then(
        (items) => dispatch(setTeamEvents(items))
      )

      DataStore.query(TeamInvitation, (item) => item.teamID.eq(teamID)).then(
        (items) => dispatch(setTeamInvitations(items))
      )
    })
  }, [teamID])

  return <>{children}</>
}
