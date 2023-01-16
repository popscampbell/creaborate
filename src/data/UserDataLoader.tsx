import { useAppDispatch } from "@/state/hooks"
import {
  setUserContacts,
  setUserImages,
  setUserInvitations,
  setUsername,
  setUserProfile,
  setUserTasks,
  setUserTeams
} from "@/state/userSlice"
import { useAuthenticator } from "@aws-amplify/ui-react"
import { Auth, DataStore } from "aws-amplify"
import React from "react"
import {
  Task,
  Team,
  TeamInvitation,
  UserContact,
  UserImage,
  UserProfile
} from "src/models"
import { getTeamWithUserRole, removeNullsFromArray } from "./utils"

export function UserDataLoader(props: { children: any }) {
  const { children } = props

  const auth = useAuthenticator()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (auth.authStatus !== "authenticated") {
      console.log("user authStatus:", auth.authStatus)
      return
    }

    Auth.currentAuthenticatedUser().then((currentUser) => {
      dispatch(setUsername(currentUser.username))
      DataStore.query(UserProfile, (profile) =>
        profile.username.eq(currentUser.username)
      )
        .then((results) => results[0] ?? null)
        .then((profile) => {
          dispatch(setUserProfile(profile))
          return profile
        })
      DataStore.query(Team, (team) =>
        team.TeamMembers.username.eq(currentUser.username)
      )
        .then(
          async (teams) =>
            await Promise.all(
              teams.map((team) =>
                getTeamWithUserRole(currentUser.username, team)
              )
            )
        )
        .then((result) => removeNullsFromArray(result))
        .then((teams) => dispatch(setUserTeams(teams)))
      DataStore.query(Task, (task) =>
        task.ownerUsername.eq(currentUser.username)
      ).then((tasks) => dispatch(setUserTasks(tasks)))
      DataStore.query(UserImage, (image) =>
        image.username.eq(currentUser.username)
      ).then((images) => dispatch(setUserImages(images)))
      DataStore.query(UserContact, (contact) =>
        contact.username.eq(currentUser.username)
      ).then((contacts) => dispatch(setUserContacts(contacts)))
      DataStore.query(TeamInvitation, (invitation) =>
        invitation.username.eq(currentUser.username)
      ).then((invitations) => dispatch(setUserInvitations(invitations)))
    })
  }, [auth.authStatus])

  return <>{children}</>
}
