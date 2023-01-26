import { setContext } from "@/state/globalSlice"
import { CreaborateContext } from "@/state/types"
import { useAuthenticator } from "@aws-amplify/ui-react"
import React from "react"
import { useAppDispatch } from "state/hooks"
import { setUsername } from "state/userSlice"
import {
  loadUserContacts,
  loadUserImages,
  loadUserInvitations,
  loadUserProfile,
  loadUserTasks,
  loadUserTeams
} from "./userUtils"

export function UserDataLoader(props: { children: any }) {
  const { children } = props

  const { user } = useAuthenticator()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (user) {
      const { username } = user

      if (username) {
        dispatch(setContext(CreaborateContext.USER))
        dispatch(setUsername(username))
        loadUserProfile(username, dispatch)
        loadUserTeams(username, dispatch)
        loadUserTasks(username, dispatch)
        loadUserImages(username, dispatch)
        loadUserContacts(username, dispatch)
        loadUserInvitations(username, dispatch)
      }
    }
  }, [user])

  return <>{children}</>
}
