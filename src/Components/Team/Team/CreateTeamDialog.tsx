import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import { TeamType } from "models"
import { useState } from "react"
import TeamTypeControl from "./TeamTypeControl"

export default function CreateTeamDialog(props: {
  buttonText?: string
  buttonTitle?: string
  buttonIcon?: JSX.Element & React.ReactNode
  dialogTitle?: string
  onCancel?: () => void
  onSuccess?: (id: string) => void
}) {
  const {
    buttonText,
    buttonTitle,
    buttonIcon,
    dialogTitle,
    onCancel,
    onSuccess
  } = props

  const [open, setOpen] = useState(false)
  const [teamName, setTeamName] = useState("")
  const [description, setDescription] = useState("")
  const [teamType, setTeamType] = useState(TeamType.TEAM)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleCancel() {
    setOpen(false)
    onCancel && onCancel()
  }

  function handleAdd() {
    setOpen(false)

    if (teamName && teamType) {
      TeamDataStore.addTeam(teamName, description, teamType).then(
        (team) => onSuccess && onSuccess(team.id)
      )
    }
  }

  return (
    <>
      <Button
        title={buttonTitle || "Create a new team"}
        onClick={handleClickOpen}
        startIcon={buttonIcon}
      >
        {buttonText || "New team"}
      </Button>
      <Dialog open={open} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">
          {dialogTitle || "New team"}
        </DialogTitle>
        <DialogContent>
          <Box>
            <TextField
              label="Name"
              fullWidth
              id="team-name"
              name="name"
              value={teamName}
              onChange={(event) => setTeamName(event.target.value)}
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              id="team-description"
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Box>
          <Box>
            <TeamTypeControl
              teamType={teamType}
              onChange={(newType) => setTeamType(newType)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleAdd}>Create team</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
