import { useAuthenticator } from "@aws-amplify/ui-react"
import { DataStore } from "aws-amplify"
import { Task, TeamInvitation, UserContact, UserImage } from "models"
import React from "react"
import { useAppDispatch } from "state/hooks"
import {
  setUserContacts,
  setUserImages,
  setUserInvitations,
  setUsername,
  setUserTasks
} from "state/userSlice"
import { loadUserProfile, loadUserTeams } from "./utils"

export function UserDataLoader(props: { children: any }) {
  const { children } = props

  const { user } = useAuthenticator()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (user) {
      const { username } = user

      if (username) {
        dispatch(setUsername(username))

        loadUserProfile(username, dispatch)

        loadUserTeams(username, dispatch)

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
