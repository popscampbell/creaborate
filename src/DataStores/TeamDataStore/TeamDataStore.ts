import { DataStore, Predicates } from "aws-amplify"
import {
  Team,
  TeamMember,
  TeamMemberRole,
  TeamMemberStatus,
  TeamType,
  TeamVisibility,
  UserProfile,
} from "models"
import useTeam from "./useTeam"
import useTeamAuthStatus from "./useTeamAuthStatus"
import useTeamInvitations from "./useTeamInvitations"
import useTeamMember from "./useTeamMember"
import useTeamMemberByUserProfile from "./useTeamMemberByUserProfile"
import useTeamMemberRole from "./useTeamMemberRole"
import useTeamMembers from "./useTeamMembers"
import useTeams from "./useTeamsByUserProfile"
import useUserInvitations from "./useUserInvitations"
import useUserProfileByTeamMember from "./useUserProfileByTeamMember"

export default class TeamDataStore {
  static useTeam = useTeam
  static useTeamAuthStatus = useTeamAuthStatus
  static useTeamInvitations = useTeamInvitations
  static useTeamMemberRole = useTeamMemberRole
  static useTeamMember = useTeamMember
  static useTeamMembers = useTeamMembers
  static useTeams = useTeams
  static useUserInvitations = useUserInvitations
  static useUserProfileByTeamMember = useUserProfileByTeamMember
  static useTeamMemberByUserProfile = useTeamMemberByUserProfile

  static async addTeam(
    userProfile: UserProfile,
    name: string,
    description: string,
    teamType: TeamType,
    visibility: TeamVisibility = TeamVisibility.PRIVATE
  ): Promise<Team> {
    return DataStore.save(
      new Team({
        Name: name,
        Description: description,
        TeamType: teamType,
        Visibility: visibility,
      })
    ).then((team) => {
      DataStore.save(
        new TeamMember({
          Team: team.id,
          UserProfile: userProfile,
          teamMemberUserProfileId: userProfile.id,
          Status: TeamMemberStatus.CONFIRMED,
          InvitedByUserProfile: userProfile.id,
          InvitedDateTime: new Date().toISOString(),
          Role: TeamMemberRole.ADMINISTRATOR,
        })
      )
      return team
    })
  }

  static updateTeam(
    team: Team,
    name?: string,
    description?: string,
    teamType?: TeamType
  ) {
    return DataStore.save(
      Team.copyOf(team, (updated) => {
        if (name) updated.Name = name
        if (description) updated.Description = description
        if (teamType) updated.TeamType = teamType
      })
    )
  }

  static async archiveTeam(team: Team) {
    await DataStore.query(TeamMember, Predicates.ALL).then((teamMembers) =>
      teamMembers.forEach((teamMember) =>
        DataStore.save(
          TeamMember.copyOf(teamMember, (updated) => {
            updated.Status = TeamMemberStatus.DEPARTED
            updated.DepartedDateTime = new Date().toISOString()
            updated.DepartedComment = "Team archived"
          })
        )
      )
    )

    return DataStore.save(
      Team.copyOf(team, (updated) => {
        updated.Visibility = TeamVisibility.ARCHIVED
      })
    )
  }

  static async inviteTeamMember(
    invitingUserProfile: UserProfile,
    team: Team,
    userProfile: UserProfile,
    role: TeamMemberRole
  ) {
    return this.getTeamMemberByTeamAndUserProfile(team.id, userProfile.id).then(
      (teamMember) =>
        teamMember && teamMember.Status !== TeamMemberStatus.INVITED
          ? DataStore.save(
              TeamMember.copyOf(teamMember, (updated) => {
                updated.Status = TeamMemberStatus.INVITED
                updated.InvitedByUserProfile = invitingUserProfile.id
                updated.InvitedDateTime = new Date().toISOString()
                updated.Role = role
              })
            ).catch((error) =>
              Promise.reject(`Error updating existing team member: ${error}`)
            )
          : DataStore.save(
              new TeamMember({
                Team: team.id,
                UserProfile: userProfile,
                teamMemberUserProfileId: userProfile.id,
                Status: TeamMemberStatus.INVITED,
                InvitedByUserProfile: invitingUserProfile.id,
                InvitedDateTime: new Date().toISOString(),
                Role: role,
              })
            ).catch((error) =>
              Promise.reject(`Error adding new team member: ${error}`)
            )
    )
  }

  static async setTeamMemberRole(teamMember: TeamMember, role: TeamMemberRole) {
    if (role === teamMember.Role)
      return Promise.reject("This person is already in this role.")

    const isLastAdmin = await this.isLastAdmin(teamMember)

    if (isLastAdmin) {
      return Promise.reject("There must be at least one administrator.")
    }

    return DataStore.save(
      TeamMember.copyOf(teamMember, (updated) => {
        updated.Role = role
      })
    )
  }

  static async acceptInvitation(invitation: TeamMember) {
    return DataStore.save(
      TeamMember.copyOf(invitation, (updated) => {
        updated.Status = TeamMemberStatus.CONFIRMED
        updated.ConfirmedDateTime = new Date().toISOString()
      })
    )
  }

  static async declineInvitation(invitation: TeamMember) {
    return DataStore.save(
      TeamMember.copyOf(invitation, (updated) => {
        updated.Status = TeamMemberStatus.DECLINED
        updated.DeclinedDateTime = new Date().toISOString()
      })
    )
  }

  static async removeTeamMember(teamMember: TeamMember) {
    const isLastAdmin = await this.isLastAdmin(teamMember)

    if (isLastAdmin) {
      return Promise.reject("There must be at least one administrator.")
    }

    return DataStore.save(
      TeamMember.copyOf(teamMember, (updated) => {
        updated.Status = TeamMemberStatus.DEPARTED
        updated.DepartedComment = new Date().toISOString()
      })
    )
  }

  static async leaveTeam(
    userProfile: UserProfile,
    team: Team,
    comment?: string
  ) {
    return DataStore.query(TeamMember, (teamMember) =>
      teamMember.and((teamMember) => [
        teamMember.Team.eq(team.id),
        teamMember.UserProfile.id.eq(userProfile.id),
        teamMember.Status.ne(TeamMemberStatus.DEPARTED),
      ])
    )
      .then((teamMembers) => teamMembers[0])
      .then((teamMember) => this.removeTeamMember(teamMember))
  }

  static async getTeam(teamId: string) {
    return DataStore.query(Team, teamId)
  }

  static async getTeamMember(id: string) {
    return DataStore.query(TeamMember, id)
  }

  static async getTeamMemberByTeamAndUserProfile(
    teamId: string,
    userProfileId: string
  ) {
    return DataStore.query(TeamMember, (teamMember) =>
      teamMember.and((teamMember) => [
        teamMember.Team.eq(teamId),
        teamMember.UserProfile.id.eq(userProfileId),
      ])
    ).then((teamMembers) => teamMembers[0])
  }

  static async isLastAdmin(teamMember: TeamMember) {
    return DataStore.query(Team, teamMember.Team).then(
      (team) =>
        team?.TeamMembers.toArray().then(
          (teamMembers) =>
            teamMembers.filter(
              (member) => member.Role === TeamMemberRole.ADMINISTRATOR
            ).length === 1
        ) || false
    )
  }
}
