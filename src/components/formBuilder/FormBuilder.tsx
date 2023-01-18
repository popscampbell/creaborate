import { Flex } from "@aws-amplify/ui-react"
import CancelIcon from "@mui/icons-material/Cancel"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import { Button, FormControl, Toolbar, useTheme } from "@mui/material"
import React from "react"
import CancelSaveDialog from "../CancelSaveDialog"
import ConfirmationDialog from "../ConfirmationDialog"
import FormBuilderField from "./FormBuilderField"
import { FormBuilderFieldProps } from "./types"

export default function FormBuilder<T>(props: {
  item: T
  fields: FormBuilderFieldProps[]
  onSave: (inputValues: any) => void
  onCancel?: () => void
  onDelete?: () => void
  dialog?: boolean
}) {
  const { item, fields, onSave, onCancel, onDelete, dialog } = props

  const theme = useTheme()

  const [isEditing, setIsEditing] = React.useState(dialog ?? false)
  const [confirmationOpen, setConfirmationOpen] = React.useState(false)

  const changes: any = {}

  function handleEdit() {
    setIsEditing(true)
  }

  function handleChange(name: string, newValue: string) {
    changes[name] = newValue
  }

  function handleCancel() {
    setIsEditing(false)
    onCancel?.()
  }

  function handleSubmit(e?: React.MouseEvent<HTMLButtonElement>) {
    e?.preventDefault()
    setIsEditing(false)
    onSave?.({ ...item, ...changes })
  }

  function handleDelete() {
    setConfirmationOpen(true)
  }

  function handleConfirmDelete() {
    setConfirmationOpen(false)
    onDelete?.()
  }

  function FormFields() {
    return (
      <Flex className="fields" direction="column" rowGap={theme.spacing(4)}>
        {fields.map((field, key) => (
          <FormControl key={key} disabled={!isEditing}>
            <FormBuilderField
              item={item}
              isEditing={isEditing}
              onChange={handleChange}
              {...field}
            />
          </FormControl>
        ))}
      </Flex>
    )
  }

  return dialog ? (
    <CancelSaveDialog onCancel={handleCancel} onSave={handleSubmit}>
      <FormFields />
    </CancelSaveDialog>
  ) : (
    <Flex as="form" direction="column" marginTop={theme.spacing(2)}>
      <FormFields />
      <Flex className="toolbar" role="toolbar" justifyContent="end">
        {isEditing && (
          <Toolbar variant="dense">
            <Button
              type="submit"
              variant="outlined"
              title="Save"
              startIcon={<SaveIcon />}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button
              type="reset"
              variant="outlined"
              title="Cancel"
              startIcon={<CancelIcon />}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Toolbar>
        )}
        {!isEditing && (
          <Toolbar variant="dense">
            <Button
              variant="outlined"
              title="Edit"
              startIcon={<EditIcon />}
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              title="Delete"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Toolbar>
        )}
      </Flex>
      <ConfirmationDialog
        open={confirmationOpen}
        onCancel={() => setConfirmationOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </Flex>
  )
}
