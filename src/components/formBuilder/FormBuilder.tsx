import { Flex } from "@aws-amplify/ui-react"
import CancelIcon from "@mui/icons-material/Cancel"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import { Button, FormControl, Toolbar, useTheme } from "@mui/material"
import React from "react"
import FormBuilderField from "./FormBuilderField"
import { FormBuilderFieldProps } from "./types"

export default function FormBuilder<T>(props: {
  item: T
  fields: FormBuilderFieldProps[]
  onSave: (inputValues: any) => void
  onDelete: () => void
}) {
  const { item, fields, onSave, onDelete } = props

  const theme = useTheme()

  const [isEditing, setIsEditing] = React.useState(false)
  const changes: any = {}

  function handleEdit() {
    setIsEditing(true)
  }

  function handleChange(name: string, newValue: string) {
    changes[name] = newValue
  }

  function handleCancel() {
    setIsEditing(false)
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setIsEditing(false)
    onSave({ ...item, ...changes })
  }

  return (
    <Flex as="form" direction="column" marginTop={theme.spacing(2)}>
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
      <Flex className="toolbar" role="toolbar" justifyContent="end">
        <Toolbar variant="dense">
          <Button
            sx={{ display: isEditing ? "none" : undefined }}
            variant="outlined"
            title="edit"
            startIcon={<EditIcon />}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            sx={{ display: isEditing ? undefined : "none" }}
            type="submit"
            variant="outlined"
            title="save"
            startIcon={<SaveIcon />}
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button
            sx={{ display: isEditing ? undefined : "none" }}
            type="reset"
            variant="outlined"
            title="cancel"
            startIcon={<CancelIcon />}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            sx={{ display: isEditing ? "none" : undefined }}
            variant="outlined"
            title="delete"
            startIcon={<DeleteIcon />}
            onClick={onDelete}
          >
            Delete
          </Button>
        </Toolbar>
      </Flex>
    </Flex>
  )
}
