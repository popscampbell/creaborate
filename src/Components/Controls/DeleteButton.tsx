import { Delete } from "@mui/icons-material"
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton
} from "@mui/material"
import { DataStore } from "aws-amplify"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function DeleteButton(props: {
  item: any
  itemType: string
  onDelete?: () => void
  icon?: boolean
}) {
  const { item, itemType, onDelete, icon } = props

  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleDelete() {
    setOpen(false)
    item &&
      DataStore.delete(item).then(() => {
        onDelete && onDelete()
      })
  }

  return (
    <>
      {icon && <IconButton onClick={handleClickOpen} children={<Delete />} />}
      {!icon && (
        <Button
          title={`Delete project "${item.name}"`}
          onClick={handleClickOpen}
          variant="outlined"
          children="Delete"
        />
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete {itemType} "{item.name}"?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting this {itemType} is not recoverable.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
