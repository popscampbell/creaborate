import { loadUserTeams } from "@/data/utils"
import { Team, TeamMember, TeamMemberRole } from "@/models"
import { useAppDispatch, useAppSelector } from "@/state/hooks"
import CreateIcon from "@mui/icons-material/GroupAdd"
import { Button, Dialog } from "@mui/material"
import { DataStore } from "aws-amplify"
import React from "react"
import FormBuilder from "../formBuilder/FormBuilder"
import { newTeamProps, requiredTeamFields } from "./teamFields"

export function NewTeamDialog() {
  const team = new Team(newTeamProps)

  const { username } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const [open, setOpen] = React.useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleSave(inputValues: any) {
    setOpen(false)
    DataStore.save(new Team(inputValues)).then((newTeam) => {
      DataStore.save(
        new TeamMember({
          teamID: newTeam.id,
          username,
          role: TeamMemberRole.ADMINISTRATOR
        })
      ).then(() => loadUserTeams(username, dispatch))
    })
  }

  function handleCancel() {
    setOpen(false)
  }

  return (
    <>
      <Button
        variant="outlined"
        title="Create a new team"
        startIcon={<CreateIcon />}
        onClick={handleOpen}
      >
        New team
      </Button>
      <Dialog open={open}>
        <FormBuilder
          item={team}
          fields={requiredTeamFields}
          dialog
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </Dialog>
    </>
  )
}
