import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
import { Task, Team, TeamContact, TeamEvent, TeamImage, TeamInvitation, TeamMember, TeamMemberRole, TeamProject } from "models"
import { TeamMemberWithName, TeamWithUserRole } from "./types"

interface TeamSliceState {
  team?: Team
  userRole?: TeamMemberRole
  members: TeamMemberWithName[]
  tasks: Task[]
  projects: TeamProject[]
  images: TeamImage[]
  contacts: TeamContact[]
  events: TeamEvent[]
  invitations: TeamInvitation[]
}

const initialState: TeamSliceState = {
  members: [],
  tasks: [],
  projects: [],
  images: [],
  contacts: [],
  events: [],
  invitations: [],
}

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeam(state, action: PayloadAction<Team | undefined>) {
      const { payload } = action
      if (!payload) {
        state = initialState
      } else {
        if (payload !== state.team) {
          state.team = payload

        }
      }
    },
    setUserRole(state, action: PayloadAction<TeamMemberRole | undefined>) {
      const { payload } = action
      if (payload !== state.userRole) {
        state.userRole = payload
      }
    },
    setTeamMembers(state, action: PayloadAction<TeamMemberWithName[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.members)) {
        state.members = payload
      }
    },
    setTeamTasks(state, action: PayloadAction<Task[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.tasks)) {
        state.tasks = payload
      }
    },
    setTeamProjects(state, action: PayloadAction<TeamProject[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.projects)) {
        state.projects = payload
      }
    },
    setTeamImages(state, action: PayloadAction<TeamImage[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.images)) {
        state.images = payload
      }
    },
    setTeamContacts(state, action: PayloadAction<TeamContact[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.contacts)) {
        state.contacts = payload
      }
    },
    setTeamEvents(state, action: PayloadAction<TeamEvent[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.events)) {
        state.events = payload
      }
    },
    setTeamInvitations(state, action: PayloadAction<TeamInvitation[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.invitations)) {
        state.invitations = payload
      }
    },
  }
})

export const {
  setTeam,
  setUserRole,
  setTeamMembers,
  setTeamTasks,
  setTeamProjects,
  setTeamImages,
  setTeamContacts,
  setTeamEvents,
  setTeamInvitations,
} = teamSlice.actions

export default teamSlice.reducer