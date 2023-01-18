import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Toolbar,
  Button
} from "@mui/material"
import React from "react"

export default function ConfirmationDialog(props: {
  open: boolean
  onCancel: () => void
  onConfirm: () => void
}) {
  const { open, onCancel, onConfirm } = props

  function handleNo() {
    onCancel()
  }

  function handleYes() {
    onConfirm()
  }

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogContentText>Are you sure?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Toolbar>
          <Button onClick={handleNo}>Cancel</Button>
          <Button onClick={handleYes}>Delete</Button>
        </Toolbar>
      </DialogActions>
    </Dialog>
  )
}
