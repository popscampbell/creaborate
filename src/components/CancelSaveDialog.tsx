import CancelIcon from "@mui/icons-material/Cancel"
import SaveIcon from "@mui/icons-material/Save"
import { Button, DialogActions, DialogContent, Toolbar } from "@mui/material"

export default function CancelSaveDialog(props: {
  onCancel: () => void
  onSave: () => void
  children?: any
}) {
  const { onCancel, onSave, children } = props

  return (
    <>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Toolbar>
          <Button
            type="reset"
            variant="outlined"
            title="Cancel"
            onClick={onCancel}
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="outlined"
            title="Save"
            onClick={onSave}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Toolbar>
      </DialogActions>
    </>
  )
}
