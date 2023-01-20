import { Flex } from "@aws-amplify/ui-react"
import CancelIcon from "@mui/icons-material/Cancel"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import {
  Button,
  FormControl,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material"
import React from "react"
import CancelSaveDialog from "../CancelSaveDialog"
import ConfirmationDialog from "../ConfirmationDialog"
import FormBuilderField from "./FormBuilderField"
import FormBuilderFieldGroup from "./FormBuilderFieldGroup"
import {
  FormBuilderFieldProps,
  FormBuilderFieldType,
  FormBuilderVariant
} from "./types"

export default function FormBuilder<T>(props: {
  item: T
  fields: FormBuilderFieldProps[]
  onSave: (inputValues: any) => void
  onCancel?: () => void
  onDelete?: () => void
  dialog?: boolean
  variant?: FormBuilderVariant
  label?: string
}) {
  const { item, fields, onSave, onCancel, onDelete, dialog, variant, label } =
    props

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
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            border: "none"
          }}
        >
          {fields.map((field, key) =>
            field.type === FormBuilderFieldType.SUBFORM ? (
              <React.Fragment key={key}>{field.subform}</React.Fragment>
            ) : field.type === FormBuilderFieldType.GROUP ? (
              <FormBuilderFieldGroup label={field.label} form={field.subform} />
            ) : (
              <FormControl key={key} disabled={!isEditing}>
                <FormBuilderField
                  item={item}
                  isEditing={isEditing}
                  onChange={handleChange}
                  {...field}
                />
              </FormControl>
            )
          )}
        </fieldset>
      </Flex>
    )
  }

  return dialog || variant === FormBuilderVariant.DIALOG ? (
    <CancelSaveDialog onCancel={handleCancel} onSave={handleSubmit}>
      <FormFields />
    </CancelSaveDialog>
  ) : variant === FormBuilderVariant.SUBFORM ? (
    <>
      {label && <Typography>{label}</Typography>}
      <FormFields />
    </>
  ) : (
    <Flex as="form" direction="column" marginTop={theme.spacing(2)} isDisabled>
      {label && <Typography>{label}</Typography>}
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
            {onDelete && (
              <Button
                variant="outlined"
                title="Delete"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}
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
