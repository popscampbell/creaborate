import { useAuthenticator } from "@aws-amplify/ui-react"
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import { Team, TeamMemberRole, UserProfile } from "models"
import { useState } from "react"
import { TeamUtilities } from "Utilities"
import TeamMemberRoleControl from "./TeamMemberRoleControl"

const defaultRole = TeamMemberRole.MEMBER

export default function AddTeamMemberDialog(props: { team: Team }) {
  const { team } = props

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<UserProfile | null>(null)
  const [inputValue, setInputValue] = useState("")
  const [role, setRole] = useState<TeamMemberRole>(defaultRole)

  const { user } = useAuthenticator()
  const currentUserProfile = UserProfileDataStore.useUserProfile(
    user?.username || ""
  )
  const userProfiles =
    UserProfileDataStore.useUserProfilesByNameSearch(inputValue)
  const teamMembers = TeamDataStore.useTeamMembers(team)

  const teamTypeLabel = TeamUtilities.TeamTypeLabel(team.TeamType || "", true)

  function handleAdd() {
    value &&
      currentUserProfile &&
      TeamDataStore.inviteTeamMember(
        currentUserProfile,
        team,
        value,
        role
      ).then(() => {
        setOpen(false)
        setValue(null)
        setRole(defaultRole)
      })
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outlined">
        Invite someone to join your {teamTypeLabel}
      </Button>
      <Dialog open={open}>
        <DialogTitle>Invite</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Invite someone to join your {teamTypeLabel}.
          </DialogContentText>
          <Autocomplete
            value={value}
            onChange={(event: any, newValue: UserProfile | null) => {
              setValue(newValue)
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue)
            }}
            options={userProfiles.filter(
              (userProfile) =>
                !teamMembers
                  .map((teamMember) => teamMember.teamMemberUserProfileId)
                  .includes(userProfile.id)
            )}
            getOptionLabel={(userProfile) => userProfile.Name || "(no name)"}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Box paddingTop={3}>
            <TeamMemberRoleControl
              role={role}
              onChange={(role) => setRole(role)}
              label="What should be their role?"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
