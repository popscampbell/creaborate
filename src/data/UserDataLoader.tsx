import { useAppDispatch } from "src/state/hooks"
import {
  setUserContacts,
  setUserImages,
  setUserInvitations,
  setUsername,
  setUserProfile,
  setUserTasks,
  setUserTeams
} from "src/state/userSlice"
import { useAuthenticator } from "@aws-amplify/ui-react"
import { DataStore } from "aws-amplify"
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

  const { user } = useAuthenticator()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (user) {
      const { username } = user

      if (username) {
        dispatch(setUsername(username))

        DataStore.query(UserProfile, (profile) => profile.username.eq(username))
          .then((results) => results[0] ?? null)
          .then((profile) => {
            dispatch(setUserProfile(profile))
            return profile
          })

        DataStore.query(Team, (team) => team.TeamMembers.username.eq(username))
          .then(
            async (teams) =>
              await Promise.all(
                teams.map((team) => getTeamWithUserRole(username, team))
              )
          )
          .then((result) => removeNullsFromArray(result))
          .then((teams) => dispatch(setUserTeams(teams)))

        DataStore.query(Task, (task) => task.ownerUsername.eq(username)).then(
          (tasks) => dispatch(setUserTasks(tasks))
        )

        DataStore.query(UserImage, (image) => image.username.eq(username)).then(
          (images) => dispatch(setUserImages(images))
        )

        DataStore.query(UserContact, (contact) =>
          contact.username.eq(username)
        ).then((contacts) => dispatch(setUserContacts(contacts)))

        DataStore.query(TeamInvitation, (invitation) =>
          invitation.username.eq(username)
        ).then((invitations) => dispatch(setUserInvitations(invitations)))
      }
    }
  }, [user])

  return <>{children}</>
}
