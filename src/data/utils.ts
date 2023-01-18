import { AppDispatch } from "@/state/store"
import { setUserProfile, setUserTeams } from "@/state/userSlice"
import { DataStore } from "aws-amplify"
import { Team, TeamMember, TeamMemberRole, TeamVisibility, UserProfile } from "models"
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