import { useAppDispatch } from "src/state/hooks"
import {
  setTeam,
  setTeamContacts,
  setTeamEvents,
  setTeamImages,
  setTeamInvitations,
  setTeamMembers,
  setTeamProjects,
  setTeamTasks
} from "src/state/teamSlice"
import { Auth, DataStore } from "aws-amplify"
import React from "react"
import {
  Task,
  Team,
  TeamContact,
  TeamEvent,
  TeamImage,
  TeamInvitation,
  TeamMember,
  TeamProject
} from "src/models"
import { getTeamMemberWithName, getTeamWithUserRole } from "./utils"

export function TeamDataLoader(props: { children: any; teamID: string }) {
  const { children, teamID } = props

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    Auth.currentAuthenticatedUser().then((currentUser) => {
      DataStore.query(Team, teamID)
        .then((team) =>
          team ? getTeamWithUserRole(currentUser.username, team) : null
        )
        .then((team) => team && dispatch(setTeam(team)))

      DataStore.query(TeamMember, (member) => member.teamID.eq(teamID))
        .then(
          async (members) =>
            await Promise.all(
              members.map((member) => getTeamMemberWithName(member))
            )
        )
        .then((teamMembers) => dispatch(setTeamMembers(teamMembers)))

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
