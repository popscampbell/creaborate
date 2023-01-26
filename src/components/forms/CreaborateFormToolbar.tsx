import { Toolbar, Button } from "@mui/material"

export default function CreaborateFormToolbar(props: {
  enabled: boolean
  onEdit: () => void
  onCancel: () => void
  onDelete?: () => void
}) {
  const { enabled, onEdit, onCancel, onDelete } = props
  return (
    <Toolbar sx={{ gap: "12px", justifyContent: "end" }}>
      {!enabled ? (
        <>
          <Button type="reset" variant="outlined" onClick={onEdit}>
            Edit
          </Button>
          {onDelete && (
            <Button variant="contained" color="error" onClick={onDelete}>
              Delete
            </Button>
          )}
        </>
      ) : (
        <>
          <Button type="reset" variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </>
      )}
    </Toolbar>
  )
}
