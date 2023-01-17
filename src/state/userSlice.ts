import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
import { Task, TeamInvitation, UserContact, UserImage, UserProfile } from "models"
import { TeamWithUserRole } from "./types"

interface UserSliceState {
  username: string
  profile?: UserProfile
  teams: TeamWithUserRole[]
  tasks: Task[]
  images: UserImage[]
  contacts: UserContact[]
  invitations: TeamInvitation[]
}

const initialState: UserSliceState = {
  username: "",
  profile: undefined,
  teams: [],
  tasks: [],
  images: [],
  contacts: [],
  invitations: [],
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      const { payload } = action
      if (payload !== state.username) {
        state.username = payload
      }
    },
    setUserProfile(state, action: PayloadAction<UserProfile | undefined>) {
      const { payload } = action
      if (!_.isEqual(payload, state.profile)) {
        state.profile = payload
      }
    },
    setUserTeams(state, action: PayloadAction<TeamWithUserRole[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.teams)) {
        state.teams = payload
      }
    },
    setUserTasks(state, action: PayloadAction<Task[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.tasks)) {
        state.tasks = payload
      }
    },
    setUserImages(state, action: PayloadAction<UserImage[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.images)) {
        state.images = payload
      }
    },
    setUserContacts(state, action: PayloadAction<UserContact[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.contacts)) {
        state.contacts = payload
      }
    },
    setUserInvitations(state, action: PayloadAction<TeamInvitation[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.invitations)) {
        state.invitations = payload
      }
    }
  }
})

export const {
  setUsername,
  setUserProfile,
  setUserTeams,
  setUserTasks,
  setUserImages,
  setUserContacts,
  setUserInvitations,
} = userSlice.actions

export default userSlice.reducer