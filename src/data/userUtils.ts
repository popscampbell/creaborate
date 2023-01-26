import { AppDispatch } from "@/state/store"
import { setUserContacts, setUserImages, setUserInvitations, setUserProfile, setUserTasks, setUserTeams } from "@/state/userSlice"
import { DataStore } from "aws-amplify"
import { Task, Team, TeamInvitation, TeamMember, TeamMemberRole, TeamVisibility, UserContact, UserImage, UserProfile, UserProfileVisibility } from "models"
import React from "react"
import { TeamMemberWithName, TeamWithUserRole } from "state/types"

export function removeNullsFromArray<T>(arr: (T | null)[]): T[] {
  return arr.filter((i) => i !== null) as T[]
}

export async function getTeamMemberWithName(
  teamMember: TeamMember
): Promise<TeamMemberWithName> {
  const profile = (
    await DataStore.query(UserProfile, (userProfile) =>
      userProfile.username.eq(teamMember.username)
    )
  )[0]

  return { ...teamMember, ...{ name: profile?.name || teamMember.username } }
}

export async function getTeamWithUserRole(
  username: string,
  team: Team
): Promise<TeamWithUserRole | null> {
  const teamMembership = await team.TeamMembers.toArray().then((members) =>
    members.find((member) => member.username === username)
  )

  return teamMembership
    ? { ...team, ...{ role: teamMembership.role as TeamMemberRole } }
    : null
}

export async function loadUserTeams(username: string, dispatch: AppDispatch) {
  return DataStore.query(Team, (team) => team.and(team => [
    team.TeamMembers.username.eq(username),
    team.visibility.ne(TeamVisibility.ARCHIVED)
  ]))
    .then(
      async (teams) =>
        await Promise.all(
          teams.map((team) => getTeamWithUserRole(username, team))
        )
    )
    .then((result) => removeNullsFromArray(result))
    .then((teams) => dispatch(setUserTeams(teams)))
}

export async function loadUserProfile(username: string, dispatch: AppDispatch) {
  DataStore.query(UserProfile, (profile) => profile.username.eq(username))
    .then((results) => results[0] ?? null)
    .then((profile) => {
      dispatch(setUserProfile(profile))
      return profile
    })
}

export async function loadUserTasks(username: string, dispatch: AppDispatch) {
  DataStore.query(Task, (task) => task.ownerUsername.eq(username)).then(
    (tasks) => dispatch(setUserTasks(tasks))
  )
}

export async function loadUserImages(username: string, dispatch: AppDispatch) {
  DataStore.query(UserImage, (image) => image.username.eq(username)).then(
    (images) => dispatch(setUserImages(images))
  )
}

export async function loadUserContacts(username: string, dispatch: AppDispatch) {
  DataStore.query(UserContact, (contact) =>
    contact.username.eq(username)
  ).then((contacts) => dispatch(setUserContacts(contacts)))
}

export async function loadUserInvitations(username: string, dispatch: AppDispatch) {
  DataStore.query(TeamInvitation, (invitation) =>
    invitation.username.eq(username)
  ).then((invitations) => dispatch(setUserInvitations(invitations)))
}

export async function searchPublicUsers(query: string): Promise<{ username: string, name: string }[]> {
  return DataStore.query(UserProfile, profile => profile.and(profile => [
    profile.visibility.eq(UserProfileVisibility.PUBLIC),
    profile.searchName.contains(query.toLowerCase())
  ]))
    .then(async results => await Promise.all(results.map(profile => ({ username: profile.username, name: profile.name }))))
}

export function useSearchPublicUsers(query: string) {
  const [matches, setMatches] = React.useState<{ username: string, name: string }[]>([])

  React.useEffect(() => {
    searchPublicUsers(query).then(results => setMatches(results))
  }, [query])

  return matches
}